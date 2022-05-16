const StarRing = () => {
  return (
    <svg
      width="650px"
      height="300px"
      viewBox="0 0 650 300"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style></style>
      <defs>
        <linearGradient
          x1="30.3087188%"
          y1="46.2016754%"
          x2="42.3132553%"
          y2="58.5925516%"
          id="linearGradient-imfhulbqmp-1"
        >
          <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
          <stop
            stop-color="#D1D9F9"
            stop-opacity="0.0780157343"
            offset="45.3425481%"
          ></stop>
          <stop
            stop-color="#637FF1"
            stop-opacity="0.712378141"
            offset="74.9535621%"
          ></stop>
          <stop stop-color="#0059FF" offset="100%"></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1443ff" />
          <stop offset="50%" stop-color="#fff" />
          <stop offset="50.1%" stop-color="#1443ff" />
          <stop offset="100%" stop-color="#fff" />
        </linearGradient>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          transform="translate(-721.000000, -312.000000)"
          fill="url(#linearGradient-imfhulbqmp-1)"
        >
          {/* <image href="/roles.png" x="-30" y="-40" height="60px" width="60px">
            <animateMotion
              dur="8s"
              autoReverse
              repeatCount="indefinite"
              path="M1365.87488,343.529111 C1384.00856,393.35099 1254.82438,486.109253 1077.33393,550.710492 C899.843491,615.31173 741.258805,627.292768 723.125124,577.470889 "
            />
          </image> */}
          <path d="M1011.66607,370.289508 C1189.15651,305.68827 1347.7412,293.707232 1365.87488,343.529111 C1384.00856,393.35099 1254.82438,486.109253 1077.33393,550.710492 C899.843491,615.31173 741.258805,627.292768 723.125124,577.470889 C704.991443,527.64901 834.175623,434.890747 1011.66607,370.289508 Z M1014.91526,379.216588 C848.063861,439.94553 725.207418,523.253956 740.507712,565.291167 C755.808005,607.328377 903.471125,592.175735 1070.32252,531.446793 C1237.17392,470.717851 1360.03036,387.409425 1344.73007,345.372215 C1329.42977,303.335004 1181.76665,318.487647 1014.91526,379.216588 Z"></path>
          <mask id="Mask">
            <path d="M1011.66607,370.289508 C1189.15651,305.68827 1347.7412,293.707232 1365.87488,343.529111 C1384.00856,393.35099 1254.82438,486.109253 1077.33393,550.710492 C899.843491,615.31173 741.258805,627.292768 723.125124,577.470889 C704.991443,527.64901 834.175623,434.890747 1011.66607,370.289508 Z M1014.91526,379.216588 C848.063861,439.94553 725.207418,523.253956 740.507712,565.291167 C755.808005,607.328377 903.471125,592.175735 1070.32252,531.446793 C1237.17392,470.717851 1360.03036,387.409425 1344.73007,345.372215 C1329.42977,303.335004 1181.76665,318.487647 1014.91526,379.216588 Z"></path>
          </mask>
          <rect
            x="721"
            y="312"
            width="200%"
            height="100%"
            fill="url(#gradient)"
            mask="url(#Mask)"
          >
            <animate
              attributeName="x"
              from="721px"
              to="71px"
              dur="8s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </g>
    </svg>
  );
};

export default StarRing;
