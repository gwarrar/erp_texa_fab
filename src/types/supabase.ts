export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      analytics_settings: {
        Row: {
          created_at: string | null
          google_analytics_id: string | null
          google_tag_manager_id: string | null
          id: string
          is_enabled: boolean | null
          meta_pixel_id: string | null
          site_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          google_analytics_id?: string | null
          google_tag_manager_id?: string | null
          id?: string
          is_enabled?: boolean | null
          meta_pixel_id?: string | null
          site_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          google_analytics_id?: string | null
          google_tag_manager_id?: string | null
          id?: string
          is_enabled?: boolean | null
          meta_pixel_id?: string | null
          site_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      announcement_settings: {
        Row: {
          animation_speed: number | null
          animation_type: string | null
          background_color: string | null
          created_at: string | null
          font_family: string | null
          font_size: string | null
          id: string
          is_enabled: boolean | null
          language: string
          link: string | null
          site_id: string
          text: string
          text_color: string | null
          updated_at: string | null
        }
        Insert: {
          animation_speed?: number | null
          animation_type?: string | null
          background_color?: string | null
          created_at?: string | null
          font_family?: string | null
          font_size?: string | null
          id?: string
          is_enabled?: boolean | null
          language?: string
          link?: string | null
          site_id: string
          text?: string
          text_color?: string | null
          updated_at?: string | null
        }
        Update: {
          animation_speed?: number | null
          animation_type?: string | null
          background_color?: string | null
          created_at?: string | null
          font_family?: string | null
          font_size?: string | null
          id?: string
          is_enabled?: boolean | null
          language?: string
          link?: string | null
          site_id?: string
          text?: string
          text_color?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      callback_requests: {
        Row: {
          called_at: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          notes: string | null
          phone_number: string
          site_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          called_at?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          phone_number: string
          site_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          called_at?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          phone_number?: string
          site_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      chat_settings: {
        Row: {
          button_color: string | null
          button_text_color: string | null
          chat_type: string | null
          created_at: string | null
          crisp_website_id: string | null
          custom_script: string | null
          delay_seconds: number | null
          greeting_message: string | null
          greeting_message_ar: string | null
          id: string
          intercom_app_id: string | null
          is_enabled: boolean | null
          office_hours_enabled: boolean | null
          office_hours_end: string | null
          office_hours_start: string | null
          office_hours_timezone: string | null
          offline_message: string | null
          offline_message_ar: string | null
          position: string | null
          show_on_mobile: boolean | null
          site_id: string
          tawkto_property_id: string | null
          tawkto_widget_id: string | null
          updated_at: string | null
          whatsapp_default_message: string | null
          whatsapp_default_message_ar: string | null
          whatsapp_number: string | null
        }
        Insert: {
          button_color?: string | null
          button_text_color?: string | null
          chat_type?: string | null
          created_at?: string | null
          crisp_website_id?: string | null
          custom_script?: string | null
          delay_seconds?: number | null
          greeting_message?: string | null
          greeting_message_ar?: string | null
          id?: string
          intercom_app_id?: string | null
          is_enabled?: boolean | null
          office_hours_enabled?: boolean | null
          office_hours_end?: string | null
          office_hours_start?: string | null
          office_hours_timezone?: string | null
          offline_message?: string | null
          offline_message_ar?: string | null
          position?: string | null
          show_on_mobile?: boolean | null
          site_id: string
          tawkto_property_id?: string | null
          tawkto_widget_id?: string | null
          updated_at?: string | null
          whatsapp_default_message?: string | null
          whatsapp_default_message_ar?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          button_color?: string | null
          button_text_color?: string | null
          chat_type?: string | null
          created_at?: string | null
          crisp_website_id?: string | null
          custom_script?: string | null
          delay_seconds?: number | null
          greeting_message?: string | null
          greeting_message_ar?: string | null
          id?: string
          intercom_app_id?: string | null
          is_enabled?: boolean | null
          office_hours_enabled?: boolean | null
          office_hours_end?: string | null
          office_hours_start?: string | null
          office_hours_timezone?: string | null
          offline_message?: string | null
          offline_message_ar?: string | null
          position?: string | null
          show_on_mobile?: boolean | null
          site_id?: string
          tawkto_property_id?: string | null
          tawkto_widget_id?: string | null
          updated_at?: string | null
          whatsapp_default_message?: string | null
          whatsapp_default_message_ar?: string | null
          whatsapp_number?: string | null
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          facebook: string | null
          id: string
          instagram: string | null
          language: string
          linkedin: string | null
          map_url: string | null
          phone: string | null
          site_id: string
          twitter: string | null
          updated_at: string | null
          whatsapp: string | null
          working_hours: string | null
          youtube: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          language?: string
          linkedin?: string | null
          map_url?: string | null
          phone?: string | null
          site_id: string
          twitter?: string | null
          updated_at?: string | null
          whatsapp?: string | null
          working_hours?: string | null
          youtube?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          language?: string
          linkedin?: string | null
          map_url?: string | null
          phone?: string | null
          site_id?: string
          twitter?: string | null
          updated_at?: string | null
          whatsapp?: string | null
          working_hours?: string | null
          youtube?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_info_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      faq: {
        Row: {
          active: boolean | null
          answer: string
          category: string | null
          created_at: string | null
          id: string
          language: string
          order_index: number | null
          question: string
          site_id: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          answer: string
          category?: string | null
          created_at?: string | null
          id?: string
          language?: string
          order_index?: number | null
          question: string
          site_id: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          answer?: string
          category?: string | null
          created_at?: string | null
          id?: string
          language?: string
          order_index?: number | null
          question?: string
          site_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "faq_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      features: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          image: string | null
          language: string
          link: string | null
          order_index: number | null
          site_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image?: string | null
          language?: string
          link?: string | null
          order_index?: number | null
          site_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image?: string | null
          language?: string
          link?: string | null
          order_index?: number | null
          site_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "features_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      hero_content: {
        Row: {
          badge: string | null
          created_at: string | null
          cta_demo_link: string | null
          cta_demo_text: string | null
          cta_trial_link: string | null
          cta_trial_text: string | null
          description: string | null
          id: string
          image: string | null
          language: string
          site_id: string
          subtitle: string | null
          title: string | null
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          badge?: string | null
          created_at?: string | null
          cta_demo_link?: string | null
          cta_demo_text?: string | null
          cta_trial_link?: string | null
          cta_trial_text?: string | null
          description?: string | null
          id?: string
          image?: string | null
          language?: string
          site_id: string
          subtitle?: string | null
          title?: string | null
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          badge?: string | null
          created_at?: string | null
          cta_demo_link?: string | null
          cta_demo_text?: string | null
          cta_trial_link?: string | null
          cta_trial_text?: string | null
          description?: string | null
          id?: string
          image?: string | null
          language?: string
          site_id?: string
          subtitle?: string | null
          title?: string | null
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hero_content_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          alt_text: string | null
          created_at: string | null
          filename: string
          id: string
          mime_type: string | null
          site_id: string | null
          size: number | null
          url: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          filename: string
          id?: string
          mime_type?: string | null
          site_id?: string | null
          size?: number | null
          url: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          filename?: string
          id?: string
          mime_type?: string | null
          site_id?: string | null
          size?: number | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      news: {
        Row: {
          active: boolean | null
          author: string | null
          category: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          featured: boolean | null
          id: string
          image: string | null
          language: string
          published_at: string | null
          site_id: string
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          author?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image?: string | null
          language?: string
          published_at?: string | null
          site_id: string
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          author?: string | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          image?: string | null
          language?: string
          published_at?: string | null
          site_id?: string
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      pricing_features: {
        Row: {
          feature_text: string
          id: string
          included: boolean | null
          order_index: number | null
          plan_id: string
        }
        Insert: {
          feature_text: string
          id?: string
          included?: boolean | null
          order_index?: number | null
          plan_id: string
        }
        Update: {
          feature_text?: string
          id?: string
          included?: boolean | null
          order_index?: number | null
          plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pricing_features_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "pricing_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      pricing_plans: {
        Row: {
          active: boolean | null
          billing_period: string | null
          created_at: string | null
          cta_link: string | null
          cta_text: string | null
          currency: string | null
          description: string | null
          id: string
          language: string
          name: string
          order_index: number | null
          popular: boolean | null
          price: number | null
          site_id: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          billing_period?: string | null
          created_at?: string | null
          cta_link?: string | null
          cta_text?: string | null
          currency?: string | null
          description?: string | null
          id?: string
          language?: string
          name: string
          order_index?: number | null
          popular?: boolean | null
          price?: number | null
          site_id: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          billing_period?: string | null
          created_at?: string | null
          cta_link?: string | null
          cta_text?: string | null
          currency?: string | null
          description?: string | null
          id?: string
          language?: string
          name?: string
          order_index?: number | null
          popular?: boolean | null
          price?: number | null
          site_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pricing_plans_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_settings: {
        Row: {
          canonical_url: string | null
          created_at: string | null
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          page_path: string
          robots: string | null
          site_id: string
          structured_data: Json | null
          twitter_card: string | null
          updated_at: string | null
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_path?: string
          robots?: string | null
          site_id: string
          structured_data?: Json | null
          twitter_card?: string | null
          updated_at?: string | null
        }
        Update: {
          canonical_url?: string | null
          created_at?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_path?: string
          robots?: string | null
          site_id?: string
          structured_data?: Json | null
          twitter_card?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sites: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          languages: string[] | null
          logo: string | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id: string
          languages?: string[] | null
          logo?: string | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          languages?: string[] | null
          logo?: string | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      solutions: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          image: string | null
          language: string
          link: string | null
          order_index: number | null
          site_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image?: string | null
          language?: string
          link?: string | null
          order_index?: number | null
          site_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image?: string | null
          language?: string
          link?: string | null
          order_index?: number | null
          site_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solutions_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          active: boolean | null
          author_avatar: string | null
          author_company: string | null
          author_name: string
          author_role: string | null
          content: string
          created_at: string | null
          featured: boolean | null
          id: string
          language: string
          order_index: number | null
          rating: number | null
          site_id: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          author_avatar?: string | null
          author_company?: string | null
          author_name: string
          author_role?: string | null
          content: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          language?: string
          order_index?: number | null
          rating?: number | null
          site_id: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          author_avatar?: string | null
          author_company?: string | null
          author_name?: string
          author_role?: string | null
          content?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          language?: string
          order_index?: number | null
          rating?: number | null
          site_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      widget_settings: {
        Row: {
          button_color: string | null
          button_text_color: string | null
          created_at: string | null
          delay_seconds: number | null
          id: string
          is_enabled: boolean | null
          message_ar: string | null
          message_en: string | null
          n8n_webhook_url: string | null
          position: string | null
          site_id: string
          updated_at: string | null
          widget_type: string
        }
        Insert: {
          button_color?: string | null
          button_text_color?: string | null
          created_at?: string | null
          delay_seconds?: number | null
          id?: string
          is_enabled?: boolean | null
          message_ar?: string | null
          message_en?: string | null
          n8n_webhook_url?: string | null
          position?: string | null
          site_id: string
          updated_at?: string | null
          widget_type?: string
        }
        Update: {
          button_color?: string | null
          button_text_color?: string | null
          created_at?: string | null
          delay_seconds?: number | null
          id?: string
          is_enabled?: boolean | null
          message_ar?: string | null
          message_en?: string | null
          n8n_webhook_url?: string | null
          position?: string | null
          site_id?: string
          updated_at?: string | null
          widget_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
