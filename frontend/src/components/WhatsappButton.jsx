import React from 'react';

const WhatsAppButton = () => {
  const whatsappLink = 'https://whatsapp.com/channel/0029VbCtv6Z7z4kfk8PzRj2A'; 

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-8
        right-6
        md:bottom-25
        md:right-8
        z-[9999]
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        flex
        items-center
        justify-center
        bg-[#25D366]
        text-white
        shadow-[0_8px_30px_rgba(37,211,102,0.35)]
        border-2
        border-white/80
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]
        active:scale-95
      "
    >
      {/* WhatsApp Logo */}
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 md:w-9 md:h-9"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.23c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.11 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.01 3C8.83 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.65-1.7A12.96 12.96 0 0 0 16 29c7.18 0 13-5.82 13-13S23.19 3 16.01 3zm0 23.73c-2.03 0-4.02-.55-5.76-1.59l-.41-.24-3.95 1.01 1.05-3.84-.27-.4A10.72 10.72 0 1 1 16.01 26.73z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;

