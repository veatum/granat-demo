type LogoProps = {
  className?: string;
  subtitle?: string;
  outlined?: boolean;
};

/** Векторная версия логотипа «Гранат»: плод с короной, зёрна, дуговая надпись. */
export function Logo({ className = "", subtitle = "кулинария", outlined = false }: LogoProps) {
  const body = "#a52a24";
  return (
    <svg
      viewBox="0 0 220 232"
      className={className}
      role="img"
      aria-label={`Гранат — ${subtitle}`}
    >
      {outlined && (
        <path
          d="M110 46 C158 46 197 82 197 133 C197 187 156 218 110 218 C64 218 23 187 23 133 C23 82 62 46 110 46 Z"
          fill="none"
          stroke="#fdfaf4"
          strokeWidth="14"
        />
      )}
      {/* корона */}
      <path
        d="M86 58 L92 24 Q93 20 97 24 L108 40 L119 12 Q121 7 124 12 L133 38 L145 20 Q148 16 150 21 L152 58 Z"
        fill={body}
        stroke={outlined ? "#fdfaf4" : "none"}
        strokeWidth={outlined ? 8 : 0}
        strokeLinejoin="round"
        paintOrder="stroke"
      />
      {/* тело граната */}
      <path
        d="M110 46 C158 46 197 82 197 133 C197 187 156 218 110 218 C64 218 23 187 23 133 C23 82 62 46 110 46 Z"
        fill={body}
      />
      {/* окошко с зёрнами */}
      <circle cx="110" cy="96" r="23" fill="#fdfaf4" />
      <g fill={body}>
        <ellipse cx="101" cy="88" rx="5.2" ry="6" transform="rotate(-18 101 88)" />
        <ellipse cx="119" cy="88" rx="5.2" ry="6" transform="rotate(18 119 88)" />
        <ellipse cx="93" cy="99" rx="5.2" ry="6" transform="rotate(-30 93 99)" />
        <ellipse cx="110" cy="98" rx="5.2" ry="6" />
        <ellipse cx="127" cy="99" rx="5.2" ry="6" transform="rotate(30 127 99)" />
        <ellipse cx="101" cy="109" rx="5.2" ry="6" transform="rotate(-12 101 109)" />
        <ellipse cx="119" cy="109" rx="5.2" ry="6" transform="rotate(12 119 109)" />
      </g>
      {/* надпись по дуге */}
      <defs>
        <path id="granat-arc" d="M 30 160 Q 110 136 190 160" fill="none" />
      </defs>
      <text
        fontFamily="var(--font-nunito), sans-serif"
        fontWeight="900"
        fontSize="37"
        fill="#fdfaf4"
        letterSpacing="1.5"
      >
        <textPath href="#granat-arc" startOffset="50%" textAnchor="middle">
          ГРАНАТ
        </textPath>
      </text>
      {subtitle && (
        <text
          x="110"
          y="188"
          textAnchor="middle"
          fontFamily="var(--font-nunito), sans-serif"
          fontWeight="700"
          fontSize="13"
          letterSpacing="5"
          fill="#f2c9b8"
        >
          {subtitle}
        </text>
      )}
    </svg>
  );
}

/** Маленькая иконка-гранат для плейсхолдеров карточек меню. */
export function PomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 232" className={className} aria-hidden="true">
      <path
        d="M86 58 L92 24 Q93 20 97 24 L108 40 L119 12 Q121 7 124 12 L133 38 L145 20 Q148 16 150 21 L152 58 Z"
        fill="currentColor"
        strokeLinejoin="round"
      />
      <path d="M110 46 C158 46 197 82 197 133 C197 187 156 218 110 218 C64 218 23 187 23 133 C23 82 62 46 110 46 Z" fill="currentColor" />
      <circle cx="110" cy="120" r="34" fill="var(--color-cream-100)" />
      <g fill="currentColor">
        <ellipse cx="97" cy="110" rx="7" ry="8" transform="rotate(-18 97 110)" />
        <ellipse cx="123" cy="110" rx="7" ry="8" transform="rotate(18 123 110)" />
        <ellipse cx="110" cy="124" rx="7" ry="8" />
        <ellipse cx="96" cy="134" rx="7" ry="8" transform="rotate(-30 96 134)" />
        <ellipse cx="124" cy="134" rx="7" ry="8" transform="rotate(30 124 134)" />
      </g>
    </svg>
  );
}
