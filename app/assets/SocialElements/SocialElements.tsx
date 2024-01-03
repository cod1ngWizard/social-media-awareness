'use client';

import { createRef } from 'react';

export default function SocialElements() {
  const coolRef = createRef<SVGGElement>();
  const tooltipRef = createRef<HTMLDivElement>();

  const showTooltip = (event: any, text: string) => {
    const tooltip = tooltipRef.current;

    if (tooltip) {
      const top = event.clientY;
      const left = event.clientX;

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.innerText = text;
      tooltip.style.display = 'block';
      tooltip.style.zIndex = '20';
    }
  };

  const hideTooltip = () => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      tooltipRef.current.style.display = 'none';
      tooltipRef.current.style.zIndex = 'unset';
    }
  };

  return (
    <>
      <div className='tooltip' ref={tooltipRef}></div>
      <svg
        width='531'
        height='749'
        viewBox='0 0 531 749'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Group34'>
          <g id='Rectangle6'>
            <path
              d='M504.496 88.292L174.986 0L9.65693 617.018L339.167 705.31L504.496 88.292Z'
              fill='#F1F1F1'
              fillOpacity='0.62'
            />
            <path
              d='M339.167 705.31L9.65693 617.018L24.4346 658.293L356.013 748.453L339.167 705.31Z'
              fill='url(#paint0_linear_51_1389)'
            />
            <path
              d='M504.496 88.292L339.167 705.31L356.013 748.453L520.861 131.951L504.496 88.292Z'
              fill='url(#paint1_linear_51_1389)'
            />
          </g>
          <g id='Rectangle7'>
            <path
              d='M424.741 134.422L140.877 58.3611C136.922 57.3014 132.857 59.6485 131.797 63.6034L29.5818 445.076L320.607 523.056L372.674 328.739L424.741 134.422Z'
              fill='url(#paint2_linear_51_1389)'
            />
            <path
              d='M320.607 523.056L29.5818 445.076L43.4752 469.982C44.4482 471.726 46.084 473.004 48.0119 473.526L337.932 552.029L320.607 523.056Z'
              fill='url(#paint3_linear_51_1389)'
            />
            <path
              d='M424.741 134.422L372.674 328.739L320.607 523.056L337.932 552.029L438.845 167.498C439.294 165.784 439.115 163.966 438.34 162.372L424.741 134.422Z'
              fill='url(#paint4_linear_51_1389)'
            />
          </g>
          <g
            id='Group33'
            ref={coolRef}
            onMouseOver={(e) => showTooltip(e, 'Tooltip for Rectangle 6')}
            onMouseOut={hideTooltip}
            className='svg-fill'
          >
            <g id='Rectangle10'>
              <path
                d='M179.229 519.181L38.0271 481.346C37.3132 481.155 36.5793 481.579 36.388 482.293L26.0682 520.807L168.563 558.988L179.229 519.181Z'
                fill='white'
                fillOpacity='0.51'
              />
              <path
                d='M168.563 558.988L26.0682 520.807L34.2307 534.78C34.4084 535.084 34.6989 535.306 35.0392 535.397L178.018 573.793L168.563 558.988Z'
                fill='url(#paint5_linear_51_1389)'
              />
              <path
                d='M179.229 519.181L168.563 558.988L178.018 573.793L187.648 533.125C187.731 532.772 187.668 532.401 187.474 532.096L179.229 519.181Z'
                fill='url(#paint6_linear_51_1389)'
              />
            </g>
            <g id='Vector'>
              <path
                d='M63.8194 499.318C61.7912 498.775 59.4972 499.31 58.0561 500.632C57.469 498.766 55.9539 497.274 53.9257 496.73C50.7385 495.876 47.432 497.785 46.578 500.972C45.0381 506.719 54.0966 515.409 54.0966 515.409C54.0966 515.409 54.9124 515.211 56.1486 514.818C56.6749 514.651 57.2775 514.448 57.9257 514.209C59.8237 513.512 62.1133 512.511 64.0288 511.211C65.6271 510.126 66.9648 508.832 67.597 507.332C67.6887 507.114 67.7656 506.892 67.8262 506.666C67.9197 506.317 67.9801 505.966 68.0093 505.618C68.0911 504.641 67.9282 503.68 67.5634 502.809C67.1512 501.824 66.481 500.953 65.6149 500.304C65.5382 500.247 65.4599 500.191 65.3802 500.137C65.3802 500.137 64.8576 499.812 64.5751 499.68C64.261 499.532 64.1655 499.411 63.8194 499.318Z'
                fill='#F44336'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M65.6149 500.304C65.5382 500.247 65.4599 500.191 65.3802 500.137C65.366 500.131 65.3576 500.127 65.3568 500.129C65.3546 500.133 65.4232 500.178 65.6149 500.304Z'
                fill='#F44336'
              />
              <path
                d='M70.8257 507.66C71.3257 503.66 69.0758 502.16 69.0758 502.16C67.9036 501.458 67.147 500.932 65.8264 500.284C65.8264 500.284 65.4572 500.171 65.3802 500.137C65.4599 500.191 65.5382 500.247 65.6149 500.304C66.481 500.953 67.1512 501.824 67.5634 502.809C67.915 503.665 68.0842 504.636 68.0093 505.618C67.9801 505.966 67.9197 506.317 67.8262 506.666C67.7656 506.892 67.6887 507.114 67.597 507.332C66.9648 508.832 65.6271 510.126 64.0288 511.211C62.3953 512.321 60.4172 513.264 57.9257 514.209C57.2775 514.448 56.6749 514.651 56.1486 514.818C54.9124 515.211 54.0966 515.409 54.0966 515.409L57.0771 517.409C65.3004 515.2 70.3257 511.659 70.8257 507.66Z'
                fill='url(#paint7_linear_51_1389)'
              />
            </g>
            <g id='Ellipse 1'>
              <path
                d='M109.27 520.61C108.608 523.078 106.891 526.335 105.053 527.838C104.998 529.925 105.521 531.763 105.521 531.763C105.521 531.763 103.596 530.017 102.002 529.3C99.9623 529.929 97.1014 529.506 94.8873 528.913C92.905 528.382 91.1778 527.374 89.7958 526.046C86.8104 523.177 85.4363 518.813 86.5837 514.531C88.2623 508.266 94.7015 504.549 100.966 506.227C101.468 506.362 101.954 506.526 102.421 506.718C104.622 507.623 106.422 509.142 107.696 511.054C109.504 513.766 110.18 517.213 109.27 520.61Z'
                fill='#D9D9D9'
              />
              <path
                d='M109.27 520.61C108.608 523.078 106.891 526.335 105.053 527.838C104.998 529.925 105.521 531.763 105.521 531.763C105.521 531.763 103.596 530.017 102.002 529.3C99.9623 529.929 97.1014 529.506 94.8873 528.913C92.905 528.382 91.1778 527.374 89.7958 526.046L95.6486 531.935C97.8162 532.602 102.002 532.714 102.002 532.714L107.696 536.475C107.906 534.667 107.696 530.927 107.696 530.927C114.715 528.106 114.369 516.915 112.235 513.448C106.607 509.818 105.468 507.613 102.421 506.718C104.622 507.623 106.422 509.142 107.696 511.054C109.504 513.766 110.18 517.213 109.27 520.61Z'
                fill='url(#paint8_linear_51_1389)'
              />
            </g>
            <g id='Vector 2'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M143.352 531.676L143.142 532.609L140.585 543.943L159.864 526.025L134.472 522.126C134.317 522.102 134.221 522.278 134.307 522.394C134.314 522.404 134.322 522.413 134.332 522.422L142.858 530.064C142.899 530.1 142.955 530.115 143.009 530.103L149.232 528.748C149.434 528.703 149.526 528.991 149.334 529.072L143.452 531.556C143.401 531.578 143.364 531.622 143.352 531.676Z'
                fill='#D9D9D9'
              />
              <path
                d='M159.864 526.025L140.585 543.943L146.14 545.164C146.197 545.176 146.257 545.158 146.298 545.117L158.634 532.609C158.658 532.584 158.674 532.553 158.681 532.519L159.864 526.025Z'
                fill='#D9D9D9'
              />
              <path
                d='M159.864 526.025L140.585 543.943L146.14 545.164C146.197 545.176 146.257 545.158 146.298 545.117L158.634 532.609C158.658 532.584 158.674 532.553 158.681 532.519L159.864 526.025Z'
                fill='url(#paint9_linear_51_1389)'
              />
              <path
                d='M143.452 531.556L149.334 529.072C149.526 528.991 149.434 528.703 149.232 528.748L143.009 530.103V530.103C142.955 530.115 142.899 530.1 142.858 530.064V530.064L143.452 531.556L143.142 532.609L143.352 531.676V531.676C143.364 531.622 143.401 531.578 143.452 531.556V531.556Z'
                fill='#D9D9D9'
              />
              <path
                d='M143.452 531.556L149.334 529.072C149.526 528.991 149.434 528.703 149.232 528.748L143.009 530.103V530.103C142.955 530.115 142.899 530.1 142.858 530.064V530.064L143.452 531.556L143.142 532.609L143.352 531.676V531.676C143.364 531.622 143.401 531.578 143.452 531.556V531.556Z'
                fill='black'
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_51_1389'
            x1='48.5486'
            y1='495.064'
            x2='360.744'
            y2='682.413'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.62' />
            <stop offset='1' />
            <stop offset='1' stopOpacity='0.57' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_51_1389'
            x1='230.565'
            y1='16.0466'
            x2='450.043'
            y2='1076.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.6' />
            <stop offset='1' stopOpacity='0.53' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_51_1389'
            x1='290.932'
            y1='98.5683'
            x2='180.715'
            y2='509.903'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FA0808' stopOpacity='0.56' />
            <stop offset='1' stopColor='#FF0000' stopOpacity='0.69' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_51_1389'
            x1='55.5469'
            y1='368.656'
            x2='303.908'
            y2='554.877'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF1010' stopOpacity='0.57' />
            <stop offset='1' stopColor='#F06C6C' stopOpacity='0.65' />
          </linearGradient>
          <linearGradient
            id='paint4_linear_51_1389'
            x1='290.932'
            y1='98.5683'
            x2='294.225'
            y2='780.516'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF1010' />
            <stop offset='0.932292' stopColor='#263B5A' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_51_1389'
            x1='28.8804'
            y1='520.41'
            x2='54.882'
            y2='604.366'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.47' />
            <stop offset='1' stopColor='#585858' />
          </linearGradient>
          <linearGradient
            id='paint6_linear_51_1389'
            x1='114.243'
            y1='501.768'
            x2='97.3982'
            y2='588.02'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.47' />
            <stop offset='1' />
          </linearGradient>
          <linearGradient
            id='paint7_linear_51_1389'
            x1='60.3189'
            y1='498.38'
            x2='55.3445'
            y2='516.945'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F44336' />
            <stop offset='1' />
          </linearGradient>
          <linearGradient
            id='paint8_linear_51_1389'
            x1='103.173'
            y1='506.819'
            x2='96.0622'
            y2='533.357'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#120303' />
            <stop offset='0.0001' stopColor='#D9D9D9' />
            <stop offset='1' />
          </linearGradient>
          <linearGradient
            id='paint9_linear_51_1389'
            x1='143.269'
            y1='544.404'
            x2='161.124'
            y2='528.881'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopOpacity='0.58' />
            <stop offset='1' stopColor='#120303' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
