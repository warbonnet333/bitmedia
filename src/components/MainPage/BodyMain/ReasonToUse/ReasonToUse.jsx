import React from "react";
import style from "./ReasonToUse.module.scss"

const ReasonToUse = () => (
  < section className={style.section}>
    <h3>Why <b>small business owners love</b> AppCo?</h3>
    <p className={style.section_descr}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work! </p>
    <ul className={style.section_list}>
      <li>
        <svg className={style.section_svg} viewBox="0 0 106 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M56.0558 3.27984C65.9342 2.03532 79.6894 -2.52504 88.8887 1.87365C98.4485 6.44475 99.2501 14.2177 102.746 25.6048C106.328 37.2732 107.012 49.7904 104.504 61.8378C101.843 74.6245 94.2446 72.9275 85.22 80.7593C76.1563 88.625 62.7132 97.4379 47.3866 95.8021C20.4536 92.9275 -9.66955 54.7583 2.97238 25.6048C7.92371 14.1866 17.3033 6.66872 31.0815 3.27984C44.429 2.11474 47.7409 4.32739 56.0558 3.27984Z" fill="url(#paint0_linear)" />
          <path d="M74.0835 56.6694C74.3782 55.1 74.3706 53.4884 74.0613 51.9218L78.3105 41.6325C78.3109 41.6257 78.3109 41.6188 78.3105 41.612C78.9991 39.7204 80.0082 37.9625 81.2933 36.4157C81.6131 36.0768 81.7417 35.5993 81.6357 35.145L79.8933 27.5953C79.8726 27.5164 79.8413 27.4406 79.8005 27.37C79.7931 27.356 79.7903 27.3393 79.7829 27.3263C79.7755 27.3132 79.743 27.2816 79.7244 27.2574C79.6865 27.2016 79.6426 27.1501 79.5936 27.1038C79.5613 27.081 79.5276 27.0605 79.4925 27.0423C79.4472 27.0089 79.3991 26.9796 79.3487 26.9548C79.2787 26.9283 79.2058 26.9105 79.1316 26.9018C79.1102 26.9018 79.0917 26.8878 79.0703 26.8859C78.8925 26.874 78.715 26.9138 78.5591 27.0004C78.5452 27.0079 78.5285 27.0107 78.5146 27.0191H78.5053L71.9543 31.1216C71.5576 31.3681 71.3113 31.7985 71.2993 32.2666C71.1173 34.2766 70.5896 36.2397 69.7397 38.069V38.0792L67.616 43.2299C66.5737 42.6739 65.4578 42.2696 64.302 42.029C64.7395 38.9989 64.9004 35.9349 64.7826 32.8754C66.5096 30.7963 67.3385 28.1116 67.0853 25.417C66.5054 19.9916 61.6188 16.0734 61.4101 15.9087C61.0963 15.6608 60.6597 15.6421 60.3261 15.8624C59.9925 16.0826 59.8368 16.4924 59.9395 16.8796C60.4174 18.68 60.0036 20.58 56.4743 24.487C54.8886 26.0233 54.386 28.369 55.2023 30.4234C55.5144 31.2092 55.9616 31.9339 56.5235 32.5645C56.2989 34.0027 56.1227 35.3647 56.0011 36.6912C55.7919 38.8853 55.7379 41.0915 55.8397 43.2932C55.012 43.7435 54.2371 44.2852 53.5295 44.9083L49.0298 25.6013C49.0298 25.5817 49.0112 25.5678 49.0057 25.5501C48.9906 25.488 48.9688 25.4278 48.9407 25.3704L44.3445 16.8535C43.8845 16.0011 42.9128 15.563 41.9721 15.7841C41.0315 16.0051 40.3547 16.8306 40.3198 17.7993L39.971 27.4761C39.9712 27.546 39.979 27.6156 39.9942 27.6837C39.9942 27.6986 39.9942 27.7117 39.9942 27.7256L44.5848 47.3836C43.8606 47.4157 43.1418 47.5233 42.4398 47.7048L37.3899 35.468C36.985 34.5326 35.911 34.0912 34.9684 34.4728L27.2502 37.6789C26.3056 38.0745 25.8567 39.1613 26.2454 40.1114L33.0943 56.689C29.0802 56.9005 25.9645 60.2814 26.0681 64.3132C26.1717 68.345 29.457 71.5604 33.4765 71.564H74.2988C76.9505 71.5254 79.3803 70.0703 80.6728 67.7468C81.9654 65.4234 81.9243 62.5845 80.5652 60.2996C79.206 58.0147 76.7352 56.6309 74.0835 56.6694ZM73.1381 32.5738L77.0274 30.1385L75.6506 33.4749C75.4543 33.95 75.679 34.4947 76.1525 34.6916C76.6259 34.8885 77.1688 34.663 77.3651 34.188L78.7419 30.8516L79.7727 35.3321C78.6698 36.682 77.7639 38.1825 77.0821 39.7883C76.1148 40.2382 75.0041 40.2616 74.0189 39.8527C73.0336 39.4439 72.2638 38.6401 71.8958 37.6361C72.5474 36.0164 72.9657 34.3119 73.1381 32.5738ZM71.0042 39.8824C71.618 40.6353 72.4145 41.2171 73.3172 41.572C74.0347 41.8816 74.8064 42.0449 75.5875 42.0523C75.7754 42.0516 75.9631 42.0401 76.1497 42.0179L73.1892 49.1859C72.3027 47.2247 70.9313 45.5235 69.2053 44.2437L71.0042 39.8824ZM58.2937 33.2338L62.9548 33.5196C62.9836 34.3891 62.9734 35.2883 62.9446 36.2015C61.3918 36.3129 59.8313 36.2372 58.2965 35.9763C58.1796 35.9595 58.0654 35.9465 57.9495 35.9307C58.0422 35.0537 58.1554 34.1656 58.2918 33.2338H58.2937ZM57.8511 25.7372C60.3144 23.0106 61.591 20.9132 61.8879 18.9416C63.6585 20.7694 64.8272 23.0986 65.2362 25.6143C65.4311 27.8044 64.7562 29.983 63.3584 31.6764C61.5257 31.5647 59.7132 31.453 57.9207 31.3413C57.1505 30.6188 56.7074 29.6123 56.694 28.5545C56.6805 27.4967 57.0977 26.4792 57.8493 25.7372H57.8511ZM57.7806 37.786L58.0497 37.8213C59.2452 38.0068 60.452 38.1098 61.6615 38.1295C62.0456 38.1295 62.4501 38.0987 62.8556 38.0671C62.7711 39.2652 62.6329 40.5163 62.4575 41.8093C62.2284 41.7972 62.0039 41.7749 61.7738 41.7749C60.373 41.7774 58.9828 42.0176 57.6619 42.4852C57.6191 40.9178 57.6581 39.3492 57.7788 37.786H57.7806ZM50.6042 48.672L47.9499 37.327C47.8258 36.8348 47.3315 36.5332 46.8389 36.6489C46.3462 36.7647 46.0368 37.2552 46.1435 37.7515L48.5288 47.9627C47.873 47.7273 47.1955 47.558 46.5062 47.4572L42.4342 30.0212C43.0047 30.2818 43.624 30.4171 44.2508 30.4178C44.3093 30.4178 44.3714 30.4094 44.4308 30.4066L45.0867 33.2171C45.1574 33.546 45.3995 33.8111 45.72 33.9103C46.0405 34.0096 46.3894 33.9276 46.6326 33.6959C46.8758 33.4642 46.9754 33.1188 46.8931 32.7926L46.2363 29.9803C46.8657 29.7007 47.4209 29.2766 47.8571 28.7422L51.9968 46.503C51.4592 47.1758 50.9926 47.9027 50.6042 48.672ZM44.9355 28.4713C43.749 28.7022 42.5375 28.2154 41.8377 27.2267L41.9555 23.948C42.2783 24.0085 42.6059 24.0396 42.9343 24.0411C43.2515 24.0424 43.5678 24.0071 43.8769 23.9359C44.5028 23.771 45.0883 23.4788 45.597 23.0776L47.1594 25.9709C46.9732 27.1713 46.1029 28.1506 44.9355 28.4731V28.4713ZM42.3943 17.5964C42.5207 17.567 42.6511 17.6256 42.7135 17.7398L44.7026 21.4308C44.3438 21.7565 43.9153 21.9954 43.4501 22.129C42.9747 22.2166 42.4855 22.1933 42.0204 22.061L42.1717 17.8664C42.1767 17.7363 42.2679 17.6257 42.3943 17.5964ZM35.68 36.1894L36.3888 37.9079L32.956 39.3341C32.5491 39.5055 32.3189 39.9409 32.4056 40.3752C32.4922 40.8094 32.8718 41.1223 33.3132 41.1233C33.4351 41.123 33.5558 41.099 33.6686 41.0525L37.1014 39.6254L37.8111 41.3458L36.0938 42.0598C35.6845 42.2297 35.452 42.6663 35.5387 43.1021C35.6254 43.538 36.0071 43.8515 36.4501 43.8508C36.5716 43.8504 36.692 43.8264 36.8045 43.7801L38.5218 43.0661L39.2315 44.7864L35.796 46.2153C35.3867 46.3853 35.1542 46.8218 35.2409 47.2577C35.3276 47.6936 35.7093 48.0071 36.1522 48.0064C36.2738 48.0061 36.3942 47.982 36.5066 47.9357L39.9394 46.5095L40.69 48.3276C37.6667 49.7122 35.4498 52.4196 34.6826 55.6641L27.9581 39.3955L35.68 36.1894ZM74.2988 69.7022H33.4765C30.4021 69.7022 27.9098 67.2015 27.9098 64.1167C27.9098 61.032 30.4021 58.5313 33.4765 58.5313C34.0141 58.5295 34.549 58.6073 35.0639 58.7621C35.3421 58.8464 35.6436 58.7951 35.8785 58.6234C36.1134 58.4517 36.2545 58.1795 36.2599 57.888C36.3259 54.5703 38.2373 51.5689 41.2101 50.1149C44.183 48.661 47.7168 48.9992 50.3621 50.9909C50.5958 51.1655 50.8978 51.2197 51.1774 51.1374C51.457 51.055 51.6818 50.8456 51.7844 50.572C53.597 45.7249 58.6067 42.8738 63.683 43.8002C68.7594 44.7266 72.4477 49.1651 72.4432 54.3422C72.445 55.4068 72.2871 56.4656 71.9747 57.4831C71.8772 57.7996 71.9547 58.1443 72.1783 58.3882C72.4018 58.632 72.7377 58.7383 73.0602 58.6672C73.467 58.5773 73.8823 58.5318 74.2988 58.5313C77.3732 58.5313 79.8655 61.032 79.8655 64.1167C79.8655 67.2015 77.3732 69.7022 74.2988 69.7022Z" fill="white" />
          <path d="M61.9455 30.3247C62.2367 30.3258 62.5116 30.1897 62.6878 29.957C63.846 28.384 64.2937 26.3956 63.9217 24.4758C63.8426 24.1476 63.5925 23.888 63.2681 23.7977C62.9438 23.7073 62.5961 23.8003 62.3597 24.0407C62.1232 24.281 62.035 24.631 62.1292 24.9552C62.3514 26.3194 62.0199 27.7161 61.2089 28.8334C60.998 29.1155 60.9641 29.4929 61.1213 29.8083C61.2784 30.1236 61.5997 30.3229 61.9511 30.3229L61.9455 30.3247Z" fill="white" />
          <path d="M60.7254 58.5313C60.0354 58.5334 59.355 58.6925 58.7353 58.9967C57.0663 56.7052 53.9499 56.0339 51.4906 57.4362C49.0313 58.8384 48.0111 61.8683 49.1188 64.4798C49.2646 64.823 49.6005 65.0458 49.9724 65.0458C50.0974 65.0461 50.2212 65.0207 50.3361 64.9713C50.5625 64.8745 50.7413 64.6915 50.8331 64.4624C50.925 64.2334 50.9224 63.9771 50.826 63.7499C50.624 63.2776 50.5198 62.7689 50.5198 62.2549C50.5198 60.1984 52.1813 58.5313 54.2309 58.5313C55.6704 58.5241 56.9814 59.361 57.5848 60.6723C57.6049 60.7027 57.6266 60.7319 57.6498 60.7599C57.6644 60.7918 57.6808 60.8229 57.6989 60.8529C57.7156 60.8734 57.7398 60.8827 57.7583 60.9023C57.8018 60.9476 57.85 60.9882 57.9021 61.0233C57.9485 61.0591 57.9982 61.0903 58.0506 61.1164C58.1045 61.1391 58.1604 61.1565 58.2176 61.1685C58.2746 61.1836 58.3331 61.1926 58.392 61.1955C58.5125 61.1945 58.6321 61.1744 58.7464 61.1359C58.7711 61.1314 58.7956 61.1255 58.8197 61.1183C58.8498 61.0987 58.8786 61.0773 58.906 61.054C58.9394 61.0391 58.9719 61.0223 59.0034 61.0038C59.4907 60.6083 60.0986 60.3927 60.7254 60.3931C61.8102 60.3948 62.7951 61.0289 63.2489 62.0175C63.4616 62.4854 64.0119 62.6917 64.4782 62.4783C64.9445 62.265 65.1501 61.7127 64.9375 61.2449C64.182 59.5926 62.537 58.5329 60.7254 58.5313Z" fill="white" />
          <path d="M42.4611 52.0624C42.3211 52.108 39.0432 53.2456 39.0432 56.6695C39.0432 57.1836 39.4586 57.6004 39.971 57.6004C40.4834 57.6004 40.8988 57.1836 40.8988 56.6695C40.9745 55.3709 41.8261 54.2474 43.0531 53.8274C43.5399 53.6634 43.802 53.1345 43.6385 52.6461C43.475 52.1577 42.9479 51.8947 42.4611 52.0587V52.0624Z" fill="white" />
          <path d="M55.5178 51.056C55.5915 51.0748 55.6673 51.0842 55.7433 51.084C56.1685 51.0835 56.539 50.7931 56.6423 50.3793C57.0693 48.6409 58.603 47.4044 60.3868 47.3603C60.8992 47.359 61.3135 46.9412 61.3123 46.4271C61.311 45.913 60.8946 45.4972 60.3822 45.4985C57.7451 45.5336 55.4663 47.3556 54.8433 49.9268C54.7188 50.4255 55.0208 50.9311 55.5178 51.056Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear" x1="2.28194" y1="10.0823" x2="104.079" y2="11.9505" gradientUnits="userSpaceOnUse">
              <stop stopColor="#255D8B" />
              <stop offset="1" stopColor="#3A80BA" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <h4 className={style.section_item_title}>Clean Design</h4>
          <p className={style.section_item_descr}>Increase sales by showing true dynamics of your website.</p>
        </div>
      </li>
      <li>
        <svg className={style.section_svg} viewBox="0 0 106 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M56.0558 3.27984C65.9342 2.03532 79.6894 -2.52504 88.8887 1.87365C98.4485 6.44475 99.2501 14.2177 102.746 25.6048C106.328 37.2732 107.012 49.7904 104.504 61.8378C101.843 74.6245 94.2446 72.9275 85.22 80.7593C76.1563 88.625 62.7132 97.4379 47.3866 95.8021C20.4536 92.9275 -9.66955 54.7583 2.97238 25.6048C7.92371 14.1866 17.3033 6.66872 31.0815 3.27984C44.429 2.11474 47.7409 4.32739 56.0558 3.27984Z" fill="url(#paint0_linear)" />
          <path d="M84.5915 22.2204L69.7631 15.786C69.5289 15.6846 69.2633 15.6846 69.0291 15.786L60.247 19.5953C55.5927 15.5246 48.9992 14.5622 43.3839 17.1337C37.7686 19.7052 34.1678 25.3361 34.1749 31.535V36.1895C31.6169 36.1926 29.5441 38.2747 29.541 40.844V66.9092C29.5441 69.4785 31.6169 71.5606 34.1749 71.5636H65.6853C68.2432 71.5606 70.3161 69.4785 70.3192 66.9092V54.5282C70.3488 54.5096 70.3831 54.5021 70.4118 54.4817L80.6592 47.1536C83.4646 45.1532 85.1361 41.9156 85.1476 38.46V23.075C85.1481 22.7043 84.9297 22.3687 84.5915 22.2204ZM36.0284 31.535C36.0268 26.2295 39.0196 21.3818 43.7517 19.0249C48.4838 16.6679 54.1371 17.2093 58.3406 20.4219L54.1933 22.2204C54.1821 22.2264 54.1713 22.2329 54.1608 22.24C51.0089 20.7872 47.3376 21.0461 44.4187 22.9269C41.4998 24.8077 39.735 28.0517 39.7356 31.535V36.1895H36.0284L36.0284 31.535ZM53.6372 36.1895H41.589L41.5891 31.535C41.5782 28.6322 43.0696 25.9322 45.5274 24.4052C47.9852 22.8782 51.0563 22.7436 53.6372 24.0496V36.1895ZM65.6853 69.7019H34.1749C32.6394 69.7019 31.3946 68.4515 31.3946 66.9092V65.9783H36.9552C37.4671 65.9783 37.882 65.5615 37.882 65.0474C37.882 64.5332 37.4671 64.1165 36.9552 64.1165H31.3946V62.2547H36.9552C37.4671 62.2547 37.882 61.8379 37.882 61.3238C37.882 60.8096 37.4671 60.3929 36.9552 60.3929H31.3946V58.5311H36.9552C37.4671 58.5311 37.882 58.1143 37.882 57.6002C37.882 57.086 37.4671 56.6693 36.9552 56.6693H31.3946V54.8075H36.9552C37.4671 54.8075 37.882 54.3907 37.882 53.8766C37.882 53.3624 37.4671 52.9457 36.9552 52.9457H31.3946V51.0839H36.9552C37.4671 51.0839 37.882 50.6671 37.882 50.153C37.882 49.6389 37.4671 49.2221 36.9552 49.2221H31.3946V47.3603H36.9552C37.4671 47.3603 37.882 46.9435 37.882 46.4294C37.882 45.9153 37.4671 45.4985 36.9552 45.4985H31.3946V43.6367H36.9552C37.4671 43.6367 37.882 43.2199 37.882 42.7058C37.882 42.1917 37.4671 41.7749 36.9552 41.7749H31.3946V40.844C31.3946 39.3016 32.6394 38.0513 34.1749 38.0513H53.6372V38.46C53.6479 41.9149 55.3188 45.152 58.1237 47.1518L66.2265 52.9457H62.9049C62.3931 52.9457 61.9782 53.3624 61.9782 53.8766C61.9782 54.3907 62.3931 54.8075 62.9049 54.8075H68.4656V56.6693H62.9049C62.3931 56.6693 61.9782 57.086 61.9782 57.6002C61.9782 58.1143 62.3931 58.5311 62.9049 58.5311H68.4656V60.3929H62.9049C62.3931 60.3929 61.9782 60.8096 61.9782 61.3238C61.9782 61.8379 62.3931 62.2547 62.9049 62.2547H68.4656V64.1165H62.9049C62.3931 64.1165 61.9782 64.5332 61.9782 65.0474C61.9782 65.5615 62.3931 65.9783 62.9049 65.9783H68.4656V66.9092C68.4656 68.4515 67.2208 69.7019 65.6853 69.7019ZM83.294 38.46C83.2839 41.3126 81.9033 43.9848 79.5869 45.6353L69.3924 52.9243L59.1978 45.6353C56.8815 43.9848 55.5009 41.3126 55.4907 38.46V23.6866L60.449 21.5353L60.4749 21.5241L69.3924 17.6544L83.294 23.6866V38.46Z" fill="white" />
          <path d="M69.0216 19.842L57.9003 24.6678C57.5621 24.8161 57.3437 25.1517 57.3442 25.5224V38.4619C57.3547 40.7124 58.4456 42.8197 60.2738 44.1208L68.8548 50.2554C69.1765 50.4855 69.6081 50.4855 69.9299 50.2554L78.5109 44.1208C80.3401 42.8197 81.4312 40.7114 81.4404 38.46V25.5205C81.441 25.1499 81.2226 24.8142 80.8844 24.6659L69.763 19.8402C69.5264 19.7371 69.2577 19.7378 69.0216 19.842ZM79.5869 26.1358V38.46C79.5779 40.1087 78.7767 41.6516 77.4358 42.6025L69.3923 48.3527L61.3488 42.6025C60.0086 41.651 59.2077 40.1085 59.1978 38.46V26.1358L69.3923 21.7113L79.5869 26.1358Z" fill="white" />
          <path d="M63.5926 36.1095C63.3277 35.9099 62.977 35.8675 62.6725 35.9981C62.368 36.1287 62.156 36.4126 62.1164 36.7428C62.0768 37.073 62.2156 37.3993 62.4805 37.5989L66.7168 40.79C67.1172 41.0918 67.6838 41.0197 67.9966 40.6271L76.4701 29.9888C76.7898 29.587 76.7247 29.001 76.3246 28.6799C75.9246 28.3589 75.3412 28.4243 75.0216 28.8261L67.1106 38.7597L63.5926 36.1095Z" fill="white" />
          <path d="M55.4908 50.153C55.4919 47.5164 53.6573 45.2382 51.0901 44.6881C48.523 44.1381 45.9226 45.4662 44.8525 47.8737C43.7825 50.2813 44.5343 53.1126 46.6558 54.6651L45.312 62.0881C45.2629 62.3595 45.3361 62.6389 45.512 62.8508C45.6879 63.0627 45.9484 63.1853 46.223 63.1856H53.6372C53.9119 63.1853 54.1724 63.0627 54.3483 62.8508C54.5242 62.6389 54.5974 62.3595 54.5483 62.0881L53.2044 54.6651C54.6376 53.6119 55.4865 51.9367 55.4908 50.153ZM51.7272 53.4111C51.3831 53.6059 51.1997 53.9983 51.2703 54.3886L52.5251 61.3238H47.3352L48.5919 54.3877C48.6625 53.9973 48.4791 53.605 48.135 53.4102C46.6569 52.5874 45.9199 50.8646 46.3429 49.2212C46.766 47.5778 48.2421 46.4298 49.932 46.4298C51.6219 46.4298 53.098 47.5778 53.5211 49.2212C53.9441 50.8646 53.2071 52.5874 51.729 53.4102L51.7272 53.4111Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear" x1="2.28194" y1="10.0823" x2="104.079" y2="11.9505" gradientUnits="userSpaceOnUse">
              <stop stopColor="#255D8B" />
              <stop offset="1" stopColor="#3A80BA" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <h4 className={style.section_item_title}>Clean Design</h4>
          <p className={style.section_item_descr}>Increase sales by showing true dynamics of your website.</p>
        </div>
      </li>
      <li>
        <svg className={style.section_svg} viewBox="0 0 106 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M56.0558 3.27984C65.9342 2.03532 79.6894 -2.52504 88.8887 1.87365C98.4485 6.44475 99.2501 14.2177 102.746 25.6048C106.328 37.2732 107.012 49.7904 104.504 61.8378C101.843 74.6245 94.2446 72.9275 85.22 80.7593C76.1563 88.625 62.7132 97.4379 47.3866 95.8021C20.4536 92.9275 -9.66955 54.7583 2.97238 25.6048C7.92371 14.1866 17.3033 6.66872 31.0815 3.27984C44.429 2.11474 47.7409 4.32739 56.0558 3.27984Z" fill="url(#paint0_linear)" />
          <path d="M78.7991 42.3563H72.4044V25.5999C72.4012 23.0306 70.3284 20.9485 67.7705 20.9455H39.9672C37.4093 20.9485 35.3364 23.0306 35.3333 25.6V31.1855H30.249C27.9396 31.188 26.068 33.0679 26.0656 35.3876V60.496C26.068 62.8158 27.9396 64.6956 30.249 64.6981H45.0514C46.8152 64.6928 48.3856 63.5751 48.9753 61.9054H64.9901C65.502 61.9054 65.9169 61.4887 65.9169 60.9745V59.1127C65.9169 57.5703 64.672 56.3199 63.1366 56.3199H60.3562V52.5963H67.7705V61.8123C67.7705 63.4062 69.0568 64.6981 70.6434 64.6981H78.799C80.3858 64.6981 81.672 63.406 81.672 61.8123V45.2422C81.6721 43.6484 80.3858 42.3563 78.7991 42.3563ZM47.3814 60.496C47.3805 61.7881 46.3378 62.8353 45.0515 62.8364H30.249C28.9626 62.8354 27.9201 61.7881 27.919 60.496V60.0436H47.3813V60.496H47.3814ZM47.3814 58.1818H27.9191V37.7018H47.3814V58.1818ZM47.3814 35.84H27.9191V35.3876C27.9201 34.0955 28.9627 33.0483 30.2491 33.0472H45.0515C46.3378 33.0482 47.3804 34.0955 47.3814 35.3876V35.84ZM63.1366 58.1818C63.6484 58.1818 64.0633 58.5986 64.0633 59.1127V60.0435H49.2349V58.1818H63.1366ZM49.2349 56.3199V52.5963H58.5026V56.3199H49.2349ZM67.7705 50.7345H59.4295H49.2349V47.9418H67.7705V50.7345ZM67.7705 45.2422V46.08H49.2349V35.3876C49.2323 33.0679 47.3608 31.188 45.0515 31.1855H37.1869V25.6C37.1869 24.0577 38.4316 22.8073 39.9672 22.8073H67.7705C69.306 22.8073 70.5508 24.0576 70.5508 25.6V42.3657C69.004 42.4158 67.7747 43.6876 67.7705 45.2422ZM79.8185 61.8123C79.8185 62.3779 79.362 62.8364 78.799 62.8364H70.6434C70.0804 62.8364 69.624 62.3779 69.624 61.8123V60.9745H79.8185V61.8123ZM79.8185 59.1127H69.624V47.9418H79.8185V59.1127ZM79.8185 46.08H69.624V45.2422C69.624 44.6767 70.0804 44.2182 70.6434 44.2182H78.799C79.362 44.2182 79.8185 44.6767 79.8185 45.2422V46.08Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear" x1="2.28194" y1="10.0823" x2="104.079" y2="11.9505" gradientUnits="userSpaceOnUse">
              <stop stopColor="#255D8B" />
              <stop offset="1" stopColor="#3A80BA" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <h4 className={style.section_item_title}>Clean Design</h4>
          <p className={style.section_item_descr}>Increase sales by showing true dynamics of your website.</p>
        </div>
      </li>
    </ul>
  </ section >)

export default ReasonToUse
