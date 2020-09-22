import React from 'react';
import './StoryReel.scss';
import Story from './Story/Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      {/*<Story*/}
      {/*  image='https://i2.wp.com/awdee.ru/wp-content/uploads/2017/08/La3jl6bNmr8.jpg?ssl=1'*/}
      {/*  profileSrc='https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/15253603_325588101159875_4274405120073664619_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=JCYYIVi5vV8AX9gUja7&_nc_ht=scontent-frx5-1.xx&oh=bf02a0db271968b80d6bffafb66dfa71&oe=5F90FF8F'*/}
      {/*  title='Bred Pitt'*/}
      {/*/>*/}
      <Story
        image='https://i1.wp.com/awdee.ru/wp-content/uploads/2017/08/wBTwiYU01k4.jpg?ssl=1'
        profileSrc='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/197233_105683866181525_308974_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=4hlXFip7zvgAX8HqEol&_nc_ht=scontent-frt3-1.xx&oh=85ece06ec9e5ea4b1e911c93a9bc9601&oe=5F900392'
        title='George Clooney'
      />
      <Story
        image='https://i2.wp.com/awdee.ru/wp-content/uploads/2017/08/C5ajaw0jYYk.jpg?ssl=1'
        profileSrc='https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/298023_134898576605130_3049684_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=SNtNJGw13EcAX_KOeWC&_nc_ht=scontent-frx5-1.xx&oh=cfed7cab05c600785e43fca92df7fa60&oe=5F916768'
        title='Daniel Craig'
      />
      <Story
        image='https://i0.wp.com/awdee.ru/wp-content/uploads/2017/08/84i1KCcghPE.jpg?ssl=1'
        profileSrc='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/58965_101211083276091_1035267_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=o33IikTo1jEAX_RUjHo&_nc_ht=scontent-frt3-1.xx&oh=5251395b3dab95b77989fccf0ce51b9e&oe=5F8E3651'
        title='Bruce Willis'
      />
      <Story
        image='https://i2.wp.com/awdee.ru/wp-content/uploads/2017/08/DC-fMnh4sko.jpg?ssl=1'
        profileSrc='https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/13164449_118900188519139_6768682665846724682_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=MLgParMXVgMAX_nKfhT&_nc_ht=scontent-frt3-2.xx&oh=f77ee15703e7e5c9429f5d81588364dd&oe=5F91AA5C'
        title='Sean Penn'
      />
      <Story
        image='https://i0.wp.com/awdee.ru/wp-content/uploads/2017/08/EswbtllIXw4.jpg?ssl=1'
        profileSrc='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/17458129_103305520211343_8998318763842156029_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=dmLPhjC5l3gAX9hKTMc&_nc_oc=AQmC6rm55QdcQFenIQF5GFNyx78l_BgdJ8BRX18NGHPlertbXqfYNemUvw13qp3xFCI&_nc_ht=scontent-frt3-1.xx&oh=ace0b7ef12fff276355dddddf7c980ae&oe=5F918054'
        title='Channing Tatum'
      />
    </div>
  );
}

export default StoryReel;