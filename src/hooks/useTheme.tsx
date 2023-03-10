export function useTheme() {

  const colors = {
    BG_INFO: '#BB2020', // red
    BG_HEADER: '#BB2020', // red
    BG_RIBBON: '#282120', // black
    BG_BODY: 'white',
    BG_LOC: '#ddd6d5',

    TXT_INFO: 'white',
    TXT_HEADER: 'white',
    TXT_RIBBON: 'white',
    TXT_BODY_R: '#BB2020', // red
    TXT_BODY_B: '#282120', // black
    TXT_LOC: '#282120'

  }

  const fonts = {
    NFO_SIZE_L: '13px',
    NFO_SIZE_S: '13px',

    NAV_SIZE_L: '20px', // Desktop nav
    NAV_SIZE_S: '20px', // Mobile nav

    RIB_SIZE_L: '15px',
    RIB_SIZE_S: '12px',

    BNR_SIZE_L: '20px',
    BNR_SIZE_S: '11px',

    H1_SIZE_L: '26px',
    H1_SIZE_S: '20px',

    H2_SIZE_L: '18px',
    H2_SIZE_S: '16px',

    H3_SIZE_L: '16px',
    H3_SIZE_S: '13px',

    FOOTER_SIZE_L: '10px',
    FOOTER_SIZE_S: '9px'
  }

  const products = {
    SM: '160px',
    MD: '240px',
    LG: '300px'
  }


  return { colors, fonts, products }
};