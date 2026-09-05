import React from 'react';
import { ExternalLink, Users, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="social"
      aria-label="Colorado Kitchen Social Presence"
      className="py-14 sm:py-18 bg-[#F7F3EB] border-y border-[#EAE2D5]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 border border-[#E2D8C9] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Heading & Community Stats */}
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
              COMMUNITY & UPDATES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#23201D]">
              Follow Colorado Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-[#665D53] max-w-md">
              Stay connected with our kitchen in Islamabad. Check out recent dishes, customer moments, and kitchen updates on our official Facebook page.
            </p>

            {/* Follower Counter Badge */}
            <div className="inline-flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE9DE] border border-[#DDD3C2] text-[#23201D] text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>{RESTAURANT_INFO.social.facebook.followers}</span>
              </div>
              <span className="text-[11px] text-[#8C8275]">
                (Observed {RESTAURANT_INFO.social.facebook.lastObserved})
              </span>
            </div>
          </div>

          {/* Right: Direct Facebook Connection Card */}
          <div className="shrink-0 flex flex-col items-center sm:items-end w-full md:w-auto">
            <a
              id="facebook-social-link"
              href={RESTAURANT_INFO.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1877F2] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#166FE5] transition-all shadow-xs hover:shadow-md group"
            >
              {/* Facebook Icon SVG */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Connect on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>

            <span className="text-[11px] text-[#8C8275] mt-2 flex items-center gap-1">
              <ThumbsUp className="w-3 h-3 text-[#1877F2]" />
              Official Page: @coloradokitchenisb
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
