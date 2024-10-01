import React from 'react';

interface InformationComponentParams {
  title: string;
  description: React.ReactNode;
  footer?: React.ReactNode;
}

export function InformationComponent(Params: InformationComponentParams) {
  return (
    <div className=" bg-gray--500 rounded-trInfo shadow-md p-6 md:p-8 lg:p-10 w-full h-screen grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-10 flex flex-col justify-between">
        <div className='top-[37%] right-[76%] absolute'>
            <button><svg with="120" height="38.5" viewBox="0 0 110 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.0487 14.9906L47.2918 14.4969C47.2259 14.4311 47.1601 14.3982 47.0943 14.3982C47.0285 14.3982 46.8968 14.4311 46.7981 14.6286C46.3374 15.4513 45.1197 16.8664 42.4869 16.8664C40.3478 16.8664 38.077 15.2868 38.077 11.8642C38.077 8.44154 40.3478 6.89478 42.454 6.89478C44.7248 6.89478 46.1728 8.54027 46.1728 9.39592V9.56047C46.1728 9.79084 46.3045 9.92248 46.5019 9.92248H47.6538C47.8512 9.92248 48.0158 9.79084 48.0158 9.56047V5.6113C48.0158 5.41384 47.8841 5.2822 47.6538 5.2822H46.6336C46.5019 5.2822 46.4032 5.34802 46.3703 5.38093C46.3374 5.41384 46.3045 5.51257 46.3045 5.6113L46.3374 6.86187C45.745 6.13786 44.5603 5.18347 42.3882 5.18347C38.3074 5.18347 36.2012 8.54027 36.2012 11.8312C36.2012 15.7804 38.834 18.6436 42.4869 18.6436C43.178 18.6436 46.6994 18.5119 48.2132 15.55C48.1803 15.4184 48.312 15.188 48.0487 14.9906Z" fill="#008AA3"></path><path d="M53.61 9.2312C50.8785 9.2312 48.9697 11.14 48.9697 13.9044C48.9697 16.6688 50.8785 18.6434 53.5771 18.6434C56.2757 18.6434 58.2174 16.7017 58.2174 13.9044C58.2174 11.1071 56.3415 9.2312 53.61 9.2312ZM53.61 10.7121C55.0251 10.7121 56.4732 11.7982 56.4732 13.9044C56.4732 15.7802 55.2555 17.1295 53.5771 17.1295C51.8987 17.1295 50.7139 15.7802 50.7139 13.9044C50.7469 11.7982 52.1949 10.7121 53.61 10.7121Z" fill="#008AA3"></path><path d="M62.4318 17.0308H61.5761V5.80861C61.5761 5.41369 61.3787 5.24915 60.9838 5.24915H58.9763C58.7788 5.24915 58.6143 5.38078 58.6143 5.57824V6.36808C58.6143 6.56554 58.7459 6.69718 58.9763 6.69718H59.8648V17.0308H58.9763C58.7788 17.0308 58.6143 17.1625 58.6143 17.3599V18.1498C58.6143 18.3472 58.7459 18.4789 58.9763 18.4789H62.4318C62.6292 18.4789 62.7938 18.3472 62.7938 18.1498V17.3599C62.7938 17.1625 62.6622 17.0308 62.4318 17.0308Z" fill="#008AA3"></path><path d="M79.3128 17.0308H78.4242V12.4893C78.4242 10.4818 77.2066 9.2312 75.2649 9.2312C73.5536 9.2312 72.6979 10.1527 72.3688 10.6134C71.8423 9.72485 70.8879 9.2312 69.6702 9.2312C68.8146 9.2312 67.6298 9.49448 66.8071 10.5805L66.84 9.98813C66.84 9.39575 66.5109 9.32993 66.1489 9.32993H64.3718C64.1743 9.32993 64.0098 9.46157 64.0098 9.65903V10.4489C64.0098 10.6463 64.1414 10.778 64.3718 10.778H65.2603V17.0308H64.3718C64.1743 17.0308 64.0098 17.1625 64.0098 17.3599V18.1497C64.0098 18.3472 64.1414 18.4788 64.3718 18.4788H67.7615C67.9589 18.4788 68.0906 18.3472 68.0906 18.1497V17.3599C68.0906 17.1625 67.9589 17.0308 67.7615 17.0308H67.0046V12.226C67.1691 11.864 67.7615 10.7451 69.2753 10.7451C70.493 10.7451 71.1512 11.502 71.1512 12.8184V16.9979H70.2955C70.0981 16.9979 69.9335 17.1295 69.9335 17.327V18.1168C69.9335 18.3143 70.0652 18.4459 70.2955 18.4459H73.7511C73.9485 18.4459 74.0802 18.3143 74.0802 18.1168V17.327C74.0802 17.1295 73.9485 16.9979 73.7511 16.9979H72.8625V12.6209C72.8625 12.3905 72.8296 12.1273 72.7638 11.9298C73.2903 11.1729 73.9814 10.778 74.87 10.778C76.4168 10.778 76.7129 11.9298 76.7129 12.8513V17.6232C76.7129 18.2156 77.0091 18.5118 77.6344 18.5118H79.3457C79.5432 18.5118 79.7077 18.3801 79.7077 18.1827V17.3928C79.6748 17.1625 79.5103 17.0308 79.3128 17.0308Z" fill="#008AA3"></path><path d="M88.3954 15.6815C88.3296 15.6157 88.2638 15.6157 88.1651 15.6157C88.0663 15.6157 88.0005 15.6486 87.9018 15.7802C87.6385 16.2081 86.5854 17.1295 85.1373 17.1295C83.821 17.1295 82.4058 16.2081 82.2742 14.2335H88.6587C88.8891 14.2335 89.0207 14.1018 89.0207 13.8715C89.0536 12.3905 88.6587 11.1729 87.836 10.3501C87.1119 9.62612 86.0917 9.2312 84.8741 9.2312C82.702 9.2312 80.4971 10.8438 80.4971 13.9044C80.4971 16.7017 82.3729 18.6434 85.0715 18.6434C87.7701 18.6434 89.0207 16.7017 89.0207 16.7017C89.1194 16.5372 89.0865 16.3726 88.922 16.241L88.3954 15.6815ZM82.2742 12.8842C82.5375 11.2387 83.7881 10.6463 84.8741 10.6463C86.2563 10.6463 87.1448 11.4691 87.2436 12.8842H82.2742Z" fill="#008AA3"></path><path d="M99.5509 17.0308H98.6623V12.4893C98.6294 10.4818 97.4117 9.2312 95.4371 9.2312C94.1866 9.2312 93.2651 9.69194 92.6069 10.6134L92.6398 9.69194C92.6398 9.49448 92.5082 9.36284 92.2778 9.36284H90.1716C89.9741 9.36284 89.8096 9.49448 89.8096 9.69194V10.4818C89.8096 10.6792 89.9412 10.8109 90.1716 10.8109H91.0601V17.0637H90.1716C89.9741 17.0637 89.8096 17.1954 89.8096 17.3928V18.1827C89.8096 18.3801 89.9412 18.5118 90.1716 18.5118H93.6271C93.8246 18.5118 93.9891 18.3801 93.9891 18.1827V17.3928C93.9891 17.1954 93.8575 17.0637 93.6271 17.0637H92.8044V12.1931C93.0018 11.7653 93.6271 10.7451 95.108 10.7451C96.3257 10.7451 96.9839 11.502 96.9839 12.8184V17.5903C96.9839 18.1827 97.2801 18.4788 97.8725 18.4788H99.5838C99.7812 18.4788 99.9458 18.3472 99.9458 18.1497V17.3599C99.9129 17.1625 99.7812 17.0308 99.5509 17.0308Z" fill="#008AA3"></path><path d="M109.688 17.0308H108.799V12.95C108.799 10.4489 107.516 9.2312 104.883 9.2312C102.25 9.2312 101.296 10.383 101.263 10.416C101.098 10.5476 101.098 10.7121 101.197 10.8767L101.691 11.502C101.79 11.6007 101.921 11.6665 102.086 11.6007C102.119 11.6007 102.152 11.5678 102.217 11.5349C102.481 11.3374 103.205 10.778 104.784 10.778C106.364 10.778 107.022 11.4691 107.022 12.9171V13.0158H105.607C102.349 13.0158 100.638 14.0689 100.638 16.0106C100.638 17.5903 101.888 18.6434 103.731 18.6434C105.146 18.6434 106.298 18.0839 107.187 16.9979V17.6232C107.187 18.2156 107.483 18.5118 108.075 18.5118H109.655C109.852 18.5118 109.984 18.3801 109.984 18.1827V17.3928C110.05 17.1625 109.918 17.0308 109.688 17.0308ZM107.055 14.3322V15.6486C106.693 16.1093 105.739 17.1295 104.225 17.1295C103.205 17.1295 102.481 16.603 102.481 15.8132C102.481 14.76 103.435 14.3322 105.739 14.3322H107.055Z" fill="#008AA3"></path><path d="M55.1557 23.6129C54.7279 22.9876 54.1026 22.6914 53.3128 22.6914C53.0495 22.6914 52.8191 22.7243 52.5558 22.7901C52.3255 22.8559 52.0951 22.9547 51.8976 23.0863C51.7002 23.218 51.5356 23.4154 51.4369 23.6129C51.3382 23.8103 51.2723 24.1065 51.2723 24.4027C51.2723 24.8305 51.404 25.1596 51.6344 25.4229C51.8647 25.6533 52.1938 25.8507 52.5558 26.0153C52.9178 26.1798 53.3128 26.3115 53.7406 26.4102C54.1684 26.5418 54.5633 26.7064 54.9253 26.9038C55.2873 27.1013 55.5835 27.3646 55.8468 27.6937C56.0772 28.0228 56.2088 28.4835 56.2088 29.0759C56.2088 29.5037 56.1101 29.8986 55.9455 30.2606C55.7481 30.6227 55.5177 30.8859 55.2215 31.1492C54.9253 31.4125 54.5962 31.577 54.2013 31.6758C53.8393 31.8074 53.4444 31.8732 53.0824 31.8732C52.49 31.8732 51.9305 31.7745 51.404 31.5441C50.8774 31.3138 50.4167 30.9517 50.0547 30.4581L50.9433 29.8328C51.1407 30.1948 51.4369 30.4581 51.7989 30.6885C52.1609 30.9188 52.5887 31.0176 53.1153 31.0176C53.3457 31.0176 53.6089 30.9847 53.8393 30.9188C54.0697 30.853 54.3 30.7214 54.4975 30.5897C54.695 30.4581 54.8595 30.2606 54.9582 30.0303C55.057 29.7999 55.1557 29.5695 55.1557 29.2734C55.1557 28.9443 55.0899 28.6481 54.9582 28.4506C54.8266 28.2531 54.6291 28.0557 54.3988 27.8911C54.1684 27.7595 53.9051 27.6279 53.6089 27.5291C53.3128 27.4304 53.0166 27.3317 52.6875 27.2329C52.3584 27.1342 52.0622 27.0355 51.766 26.9038C51.4698 26.7722 51.2065 26.6077 50.9762 26.4102C50.7458 26.2127 50.5483 25.9824 50.4167 25.6862C50.2851 25.39 50.2192 25.028 50.2192 24.6002C50.2192 24.1723 50.318 23.7445 50.4825 23.3825C50.6471 23.0205 50.8774 22.7572 51.1736 22.5268C51.4698 22.2965 51.7989 22.1319 52.1609 22.0332C52.5229 21.9345 52.9178 21.8687 53.2798 21.8687C53.8064 21.8687 54.3 21.9674 54.7608 22.1319C55.2215 22.2965 55.6164 22.5927 55.9784 23.0534L55.1557 23.6129Z" fill="#008AA3"></path><path d="M60.4554 28.7135C60.4883 29.0426 60.5541 29.3388 60.6857 29.6021C60.8174 29.8653 60.9819 30.1286 61.1794 30.3261C61.3768 30.5235 61.6401 30.6881 61.9034 30.8197C62.1667 30.9514 62.4629 30.9843 62.792 30.9843C63.2527 30.9843 63.6805 30.8856 64.0425 30.6552C64.4045 30.4248 64.6678 30.1944 64.8324 29.8983L65.5235 30.4577C65.1615 30.9185 64.7336 31.2805 64.2729 31.4779C63.8122 31.6754 63.3185 31.7741 62.792 31.7741C62.3312 31.7741 61.8705 31.7083 61.4756 31.5108C61.0806 31.3134 60.7186 31.1159 60.4554 30.8197C60.1592 30.5235 59.9288 30.1615 59.7643 29.7666C59.5997 29.3717 59.501 28.911 59.501 28.4502C59.501 27.9895 59.5668 27.5288 59.7313 27.1338C59.8959 26.7389 60.1263 26.3769 60.4225 26.0807C60.7186 25.7845 61.0477 25.5542 61.4427 25.3896C61.8376 25.2251 62.2325 25.1263 62.6932 25.1263C63.154 25.1263 63.6147 25.2251 63.9767 25.3896C64.3387 25.5542 64.6678 25.7845 64.9311 26.0807C65.1944 26.3769 65.3918 26.706 65.5235 27.068C65.6551 27.4629 65.7209 27.8579 65.7209 28.2857V28.6806L60.4554 28.7135ZM64.7665 27.9566C64.7665 27.3642 64.5691 26.8706 64.24 26.4756C63.878 26.1136 63.3843 25.9162 62.7261 25.9162C62.4299 25.9162 62.1667 25.982 61.8705 26.0807C61.6072 26.1795 61.3768 26.344 61.1465 26.5415C60.949 26.7389 60.7845 26.9364 60.6528 27.1997C60.5212 27.4629 60.4554 27.6933 60.4554 27.9566H64.7665Z" fill="#008AA3"></path><path d="M69.8657 32.8935C70.129 33.2555 70.4581 33.5188 70.8859 33.7492C71.3137 33.9466 71.7745 34.0783 72.2681 34.0783C72.7289 34.0783 73.0909 34.0124 73.42 33.8808C73.7491 33.7492 73.9794 33.5846 74.1769 33.3543C74.3744 33.1239 74.506 32.8606 74.6047 32.5644C74.7034 32.2682 74.7364 31.9391 74.7364 31.61V30.4911H74.7035C74.4073 30.9189 74.0453 31.2151 73.6503 31.4126C73.2225 31.61 72.7947 31.6759 72.3339 31.6759C71.8732 31.6759 71.4454 31.61 71.0505 31.4455C70.6555 31.2809 70.2935 31.0506 69.9974 30.7873C69.7012 30.524 69.4708 30.162 69.3062 29.7671C69.1417 29.3722 69.043 28.9443 69.043 28.4836C69.043 28.0229 69.1088 27.595 69.2733 27.2001C69.4379 26.8052 69.6683 26.4432 69.9315 26.147C70.1948 25.8508 70.5568 25.6205 70.9517 25.4559C71.3467 25.2914 71.7745 25.1926 72.2352 25.1926C72.4327 25.1926 72.6301 25.2255 72.8276 25.2584C73.0251 25.2914 73.2554 25.3572 73.4529 25.4559C73.6503 25.5546 73.8807 25.6863 74.0782 25.8179C74.2756 25.9825 74.4731 26.1799 74.6705 26.4103H74.7035V25.3572H75.592V31.6429C75.592 31.972 75.5591 32.367 75.4604 32.729C75.3616 33.091 75.1971 33.4859 74.9667 33.7821C74.7364 34.0783 74.3743 34.3745 73.9465 34.6048C73.5187 34.8352 72.9263 34.9339 72.2023 34.9339C71.577 34.9339 71.0176 34.8352 70.5239 34.6377C70.0303 34.4403 69.5695 34.1112 69.1746 33.6833L69.8657 32.8935ZM70.0303 28.3849C70.0303 28.714 70.0961 29.0431 70.2277 29.3393C70.3594 29.6354 70.5239 29.8987 70.7214 30.0962C70.9188 30.2936 71.1821 30.4911 71.4783 30.6227C71.7745 30.7544 72.0707 30.8202 72.3998 30.8202C72.7289 30.8202 73.0251 30.7544 73.3212 30.6557C73.6174 30.524 73.8807 30.3595 74.1111 30.162C74.3414 29.9645 74.506 29.7013 74.6376 29.4051C74.7693 29.1089 74.8022 28.7798 74.8022 28.4178C74.8022 28.0887 74.7364 27.7596 74.6376 27.4634C74.5389 27.1672 74.3744 26.9039 74.1769 26.7065C73.9794 26.509 73.7162 26.3116 73.42 26.1799C73.1238 26.0483 72.7947 25.9825 72.4327 25.9825C72.1036 25.9825 71.8074 26.0483 71.5112 26.1799C71.215 26.3116 70.9846 26.4761 70.7543 26.7065C70.5239 26.9368 70.3923 27.1672 70.2606 27.4634C70.0961 27.7267 70.0303 28.0558 70.0303 28.3849Z" fill="#008AA3"></path><path d="M84.2483 31.6096C84.2154 31.4451 84.2154 31.2805 84.2154 31.116C84.2154 30.9514 84.2154 30.7869 84.2154 30.6223H84.1825C84.0837 30.7869 83.9521 30.9514 83.8205 31.0831C83.6888 31.2147 83.4914 31.3464 83.2939 31.4451C83.0964 31.5438 82.899 31.6426 82.7015 31.6755C82.5041 31.7413 82.2737 31.7742 82.0762 31.7742C81.2535 31.7742 80.6611 31.5438 80.2662 31.1489C79.8713 30.7211 79.6738 30.0958 79.6738 29.306V25.291H80.5624V28.7794C80.5624 29.1414 80.5953 29.4376 80.6282 29.7009C80.694 29.9642 80.7599 30.1945 80.8915 30.392C81.0231 30.5894 81.1877 30.7211 81.4181 30.8198C81.6484 30.9185 81.9117 30.9514 82.2408 30.9514C82.2737 30.9514 82.4053 30.9185 82.6028 30.8856C82.8003 30.8527 83.0306 30.754 83.261 30.5894C83.4914 30.4249 83.6888 30.1945 83.8863 29.8654C84.0837 29.5363 84.1496 29.0756 84.1496 28.5161V25.2581H85.0381V30.1945C85.0381 30.3591 85.0381 30.5894 85.071 30.8527C85.1039 31.116 85.1039 31.3793 85.1039 31.6096H84.2483Z" fill="#008AA3"></path><path d="M89.3158 27.2656C89.3158 27.0024 89.3158 26.7062 89.2829 26.41C89.25 26.1138 89.25 25.7518 89.25 25.2911H90.1386V26.4758H90.1715C90.2373 26.3113 90.336 26.1467 90.4348 25.9822C90.5664 25.8176 90.698 25.686 90.8626 25.5543C91.0271 25.4227 91.2246 25.324 91.455 25.2582C91.6853 25.1923 91.9157 25.1594 92.2119 25.1594C92.4752 25.1594 92.6726 25.1923 92.8701 25.2252L92.7055 26.1138C92.5739 26.0809 92.4093 26.048 92.179 26.048C91.8499 26.048 91.5537 26.1138 91.2904 26.2454C91.06 26.3771 90.8297 26.5416 90.6651 26.7391C90.5006 26.9366 90.3689 27.1669 90.3031 27.3973C90.2373 27.6277 90.1715 27.858 90.1715 28.0884V31.6427H89.2829V27.2656H89.3158Z" fill="#008AA3"></path><path d="M101.889 28.4502C101.889 28.911 101.824 29.3717 101.626 29.7666C101.429 30.1615 101.231 30.5235 100.935 30.8197C100.639 31.1159 100.277 31.3463 99.8819 31.5108C99.487 31.6754 99.0262 31.7741 98.5326 31.7741C98.0389 31.7741 97.6111 31.7083 97.1833 31.5108C96.7555 31.3134 96.4264 31.1159 96.1302 30.8197C95.834 30.5235 95.6036 30.1615 95.4391 29.7666C95.2745 29.3717 95.1758 28.911 95.1758 28.4502C95.1758 27.9895 95.2416 27.5288 95.4391 27.1338C95.6036 26.7389 95.834 26.3769 96.1302 26.0807C96.4264 25.7845 96.7884 25.5542 97.1833 25.3896C97.5782 25.2251 98.0389 25.1263 98.5326 25.1263C99.0262 25.1263 99.487 25.1922 99.8819 25.3896C100.277 25.5871 100.639 25.7845 100.935 26.0807C101.231 26.3769 101.462 26.7389 101.626 27.1338C101.824 27.5288 101.889 27.9895 101.889 28.4502ZM100.935 28.4502C100.935 28.0882 100.869 27.7591 100.77 27.4629C100.672 27.1667 100.507 26.9035 100.277 26.6731C100.046 26.4427 99.8161 26.2782 99.5199 26.1465C99.2237 26.0149 98.8946 25.9491 98.5326 25.9491C98.1706 25.9491 97.8415 26.0149 97.5453 26.1465C97.2491 26.2782 97.0187 26.4427 96.7884 26.6731C96.558 26.9035 96.4264 27.1667 96.3276 27.4629C96.2289 27.7591 96.1631 28.0882 96.1631 28.4502C96.1631 28.8122 96.2289 29.1413 96.3276 29.4375C96.4264 29.7337 96.5909 29.997 96.7884 30.2274C96.9858 30.4577 97.2491 30.6223 97.5453 30.7539C97.8415 30.8856 98.1706 30.9514 98.5326 30.9514C98.8946 30.9514 99.2237 30.8856 99.5199 30.7539C99.8161 30.6223 100.046 30.4577 100.277 30.2274C100.507 29.997 100.639 29.7337 100.77 29.4375C100.902 29.1413 100.935 28.8122 100.935 28.4502Z" fill="#008AA3"></path><path d="M108.897 26.8049C108.766 26.5416 108.568 26.3442 108.371 26.1796C108.14 26.0151 107.877 25.9493 107.548 25.9493C107.383 25.9493 107.252 25.9822 107.087 26.0151C106.923 26.048 106.791 26.1138 106.659 26.1796C106.528 26.2454 106.429 26.3442 106.363 26.4758C106.297 26.6075 106.232 26.7391 106.232 26.9036C106.232 27.1998 106.33 27.4302 106.561 27.5618C106.758 27.6935 107.087 27.8251 107.482 27.9238L108.404 28.1542C108.832 28.2529 109.226 28.4504 109.523 28.7466C109.819 29.0428 109.95 29.4377 109.95 29.8655C109.95 30.1946 109.885 30.4908 109.753 30.7541C109.621 31.0174 109.424 31.2148 109.194 31.3465C108.963 31.511 108.7 31.6097 108.404 31.7085C108.107 31.8072 107.811 31.8072 107.482 31.8072C106.989 31.8072 106.528 31.7085 106.133 31.5439C105.705 31.3465 105.343 31.0503 105.047 30.5895L105.804 30.063C105.968 30.3592 106.199 30.5895 106.495 30.7541C106.758 30.9186 107.087 31.0174 107.482 31.0174C107.647 31.0174 107.844 30.9845 108.009 30.9515C108.173 30.9186 108.338 30.8528 108.502 30.7541C108.634 30.6554 108.766 30.5566 108.831 30.425C108.897 30.2933 108.963 30.1288 108.963 29.9642C108.963 29.6352 108.832 29.4048 108.601 29.2731C108.371 29.1415 108.075 29.0099 107.745 28.944L106.89 28.7466C106.791 28.7137 106.627 28.6808 106.462 28.6149C106.265 28.5491 106.1 28.4504 105.935 28.3188C105.771 28.1871 105.606 28.0226 105.475 27.8251C105.343 27.6277 105.277 27.3644 105.277 27.0682C105.277 26.7391 105.343 26.4758 105.475 26.2125C105.606 25.9493 105.771 25.7847 106.001 25.6202C106.232 25.4556 106.462 25.3569 106.758 25.2582C107.054 25.1594 107.318 25.1594 107.614 25.1594C108.042 25.1594 108.469 25.2582 108.831 25.4227C109.194 25.5873 109.49 25.8834 109.72 26.3113L108.897 26.8049Z" fill="#008AA3"></path><path d="M30.2441 9.03433L16.4549 1.07016C15.9612 0.773975 15.1714 0.773975 14.7107 1.07016L11.9792 2.64983L0.888564 9.03433C0.394917 9.2976 0 9.98871 0 10.5482V26.4765C0 27.036 0.394917 27.7271 0.888564 27.9904L14.7107 35.9545C15.2043 36.2178 15.9612 36.2178 16.4549 35.9545L30.2441 27.9904C30.7377 27.7271 31.1326 27.036 31.1326 26.4765V10.5482C31.1326 9.98871 30.7377 9.2976 30.2441 9.03433ZM28.0391 22.5273L19.5813 30.9851C19.2851 31.2813 18.7257 31.4459 18.3307 31.3142L6.77941 28.2207C6.38449 28.122 5.95667 27.6942 5.85794 27.2992L2.76442 15.7479C2.66569 15.353 2.79733 14.7935 3.09352 14.4973L11.5513 6.03954C11.8475 5.74335 12.407 5.5788 12.8348 5.71044L22.0825 8.17867L24.3861 8.80396C24.7811 8.90269 25.2089 9.33052 25.3076 9.72543L28.4011 21.2768C28.4999 21.6717 28.3353 22.2311 28.0391 22.5273Z" fill="#E8BA00"></path><path d="M20.3059 11.1737C20.1743 10.9433 19.8122 10.7458 19.549 10.7458H11.5848C11.3215 10.7458 10.9595 10.9433 10.8279 11.1737L7.63563 16.7025L6.8458 18.0847C6.71416 18.3151 6.71416 18.71 6.8458 18.9733L10.8279 25.8843C10.9595 26.1147 11.3215 26.3122 11.5848 26.3122H19.549C19.8122 26.3122 20.1743 26.1147 20.3059 25.8843L24.288 18.9733C24.4196 18.7429 24.4196 18.348 24.288 18.0847L20.3059 11.1737ZM19.4502 20.5201C19.4502 20.6517 19.3515 20.8162 19.2199 20.915L15.7643 22.9225C15.6327 22.9883 15.4353 22.9883 15.3365 22.9225L11.881 20.915C11.7494 20.8491 11.6506 20.6846 11.6506 20.5201V16.5051C11.6506 16.3734 11.7494 16.2089 11.881 16.1101L14.6454 14.4976L15.3365 14.1026C15.4682 14.0368 15.6656 14.0368 15.7643 14.1026L19.2199 16.1101C19.3515 16.176 19.4502 16.3405 19.4502 16.5051V20.5201Z" fill="#E8BA00"></path></svg></button>
        </div>
        <div className="flex-1 flex items-center justify-start p-28">
          <div className="grid grid-cols-1 gap-4">
            <div className="text-[#008296] text-2xl font-bold">{Params.title}</div>
            <div className="text-gray-100 text-sm">{Params.description}</div>
          </div>
        </div>
        <footer className="text-center text-gray-100 text-xs">
          {Params.footer || 'Todos los derechos reservados © (2023) Colmena Seguros'}
        </footer>
      </div>
    </div>
  );
}