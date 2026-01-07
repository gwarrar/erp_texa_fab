import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface MovingElement {
  id: number;
  startPoint: Point;
  endPoint: Point;
  progress: number;
  speed: number;
  size: number;
  opacity: number;
}

interface AnimatedGridBackgroundProps {
  gridSize?: number;
  dotColor?: string;
  lineColor?: string;
  glowColor?: string;
  className?: string;
  showDots?: boolean;
  showLines?: boolean;
  showMovingElements?: boolean;
  numMovingElements?: number;
  interactive?: boolean;
  lightMode?: boolean;
}

export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  gridSize = 60,
  dotColor = "rgba(13, 148, 136, 0.3)",
  lineColor = "rgba(13, 148, 136, 0.08)",
  glowColor = "rgba(13, 148, 136, 0.5)",
  className = "",
  showDots = true,
  showLines = true,
  showMovingElements = true,
  numMovingElements = 8,
  interactive = true,
  lightMode = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<Point | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const movingElementsRef = useRef<MovingElement[]>([]);
  const gridPointsRef = useRef<Point[]>([]);

  // Generate grid points
  const generateGridPoints = useCallback((width: number, height: number) => {
    const points: Point[] = [];
    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({ x: i * gridSize, y: j * gridSize });
      }
    }
    return points;
  }, [gridSize]);

  // Get random grid point
  const getRandomGridPoint = useCallback(() => {
    const points = gridPointsRef.current;
    if (points.length === 0) return { x: 0, y: 0 };
    return points[Math.floor(Math.random() * points.length)];
  }, []);

  // Get adjacent grid point
  const getAdjacentPoint = useCallback((point: Point) => {
    const directions = [
      { x: gridSize, y: 0 },
      { x: -gridSize, y: 0 },
      { x: 0, y: gridSize },
      { x: 0, y: -gridSize },
      { x: gridSize, y: gridSize },
      { x: -gridSize, y: -gridSize },
      { x: gridSize, y: -gridSize },
      { x: -gridSize, y: gridSize },
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    return {
      x: Math.max(0, Math.min(dimensions.width, point.x + dir.x)),
      y: Math.max(0, Math.min(dimensions.height, point.y + dir.y)),
    };
  }, [gridSize, dimensions]);

  // Initialize moving elements
  const initMovingElements = useCallback(() => {
    const elements: MovingElement[] = [];
    for (let i = 0; i < numMovingElements; i++) {
      const startPoint = getRandomGridPoint();
      elements.push({
        id: i,
        startPoint,
        endPoint: getAdjacentPoint(startPoint),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        size: 3 + Math.random() * 4,
        opacity: 0.4 + Math.random() * 0.4,
      });
    }
    movingElementsRef.current = elements;
  }, [numMovingElements, getRandomGridPoint, getAdjacentPoint]);

  // Update dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        gridPointsRef.current = generateGridPoints(width, height);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [generateGridPoints]);

  // Initialize elements when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initMovingElements();
    }
  }, [dimensions, initMovingElements]);

  // Mouse tracking
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos(null);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [interactive]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw grid lines
      if (showLines) {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.beginPath();

        // Vertical lines
        for (let x = 0; x <= dimensions.width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, dimensions.height);
        }

        // Horizontal lines
        for (let y = 0; y <= dimensions.height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(dimensions.width, y);
        }

        ctx.stroke();
      }

      // Draw dots at intersections
      if (showDots) {
        gridPointsRef.current.forEach((point) => {
          let dotOpacity = 0.3;
          let dotSize = 2;

          // Interactive glow effect
          if (mousePos && interactive) {
            const distance = Math.sqrt(
              Math.pow(point.x - mousePos.x, 2) + Math.pow(point.y - mousePos.y, 2)
            );
            if (distance < 150) {
              const intensity = 1 - distance / 150;
              dotOpacity = 0.3 + intensity * 0.7;
              dotSize = 2 + intensity * 3;
            }
          }

          ctx.beginPath();
          ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${dotOpacity})`);
          ctx.fill();
        });
      }

      // Update and draw moving elements
      if (showMovingElements) {
        movingElementsRef.current.forEach((element, index) => {
          // Update progress
          element.progress += element.speed;

          // If element reached destination, pick new path
          if (element.progress >= 1) {
            element.startPoint = { ...element.endPoint };
            element.endPoint = getAdjacentPoint(element.endPoint);
            element.progress = 0;
          }

          // Calculate current position
          const currentX =
            element.startPoint.x +
            (element.endPoint.x - element.startPoint.x) * element.progress;
          const currentY =
            element.startPoint.y +
            (element.endPoint.y - element.startPoint.y) * element.progress;

          // Draw trail
          const gradient = ctx.createLinearGradient(
            element.startPoint.x,
            element.startPoint.y,
            currentX,
            currentY
          );
          gradient.addColorStop(0, "rgba(13, 148, 136, 0)");
          gradient.addColorStop(1, `rgba(13, 148, 136, ${element.opacity * 0.5})`);

          ctx.beginPath();
          ctx.moveTo(element.startPoint.x, element.startPoint.y);
          ctx.lineTo(currentX, currentY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw moving dot with glow
          ctx.beginPath();
          ctx.arc(currentX, currentY, element.size + 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(13, 148, 136, ${element.opacity * 0.2})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(currentX, currentY, element.size, 0, Math.PI * 2);
          ctx.fillStyle = glowColor.replace(/[\d.]+\)$/, `${element.opacity})`);
          ctx.fill();

          // Inner bright core
          ctx.beginPath();
          ctx.arc(currentX, currentY, element.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fill();
        });
      }

      // Mouse glow effect
      if (mousePos && interactive) {
        const gradient = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          120
        );
        gradient.addColorStop(0, "rgba(13, 148, 136, 0.15)");
        gradient.addColorStop(0.5, "rgba(13, 148, 136, 0.05)");
        gradient.addColorStop(1, "rgba(13, 148, 136, 0)");

        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 120, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    dimensions,
    gridSize,
    dotColor,
    lineColor,
    glowColor,
    showDots,
    showLines,
    showMovingElements,
    mousePos,
    interactive,
    getAdjacentPoint,
  ]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Background gradient - Light or Dark mode */}
      <div 
        className={`absolute inset-0 ${
          lightMode 
            ? "bg-gradient-to-br from-slate-50 via-white to-slate-100" 
            : "bg-gradient-to-br from-slate-900 via-slate-950 to-[#0A1628]"
        }`} 
      />
      
      {/* Animated background blobs */}
      <motion.div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${
          lightMode ? "bg-teal-400/10" : "bg-teal-500/10"
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${
          lightMode ? "bg-teal-500/5" : "bg-teal-600/5"
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
          lightMode ? "bg-cyan-400/5" : "bg-cyan-500/5"
        }`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Canvas for grid and moving elements */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      />

      {/* Additional floating particles */}
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              lightMode ? "bg-teal-500" : "bg-teal-400"
            }`}
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,
              ],
              y: [
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
              ],
              opacity: [0, lightMode ? 0.4 : 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedGridBackground;
