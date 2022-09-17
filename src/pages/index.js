import style from '../styles/style.module.scss'
import { useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Observer } from "gsap/dist/Observer";
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Home = () => { 

  const defaultLatLng = {
    lat: 38.26464003003643, 
    lng: 140.88170118198065,
  };

useEffect(() => {
setbox()
console.clear();
gsap.config({ nullTargetWarn: false,});
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger)

let sections = document.querySelectorAll("#section"),
  images = document.querySelectorAll("#bg"),
  outerWrappers = gsap.utils.toArray("#outer"),
  innerWrappers = gsap.utils.toArray("#inner"),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length - 1),
  animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index);
  animating = true;
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.3, ease: "power1.inOut" },
        onComplete: () => animating = false
      });
  if (currentIndex >= 0) {
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { yPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
      yPercent: i => i ? -100 * dFactor : 100 * dFactor
    }, { 
      yPercent: 0 
    }, 0)
    .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
 

  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
});

gotoSection(0, 1);

  gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 }, // timelineのプロパティ
    scrollTrigger: {
      trigger: "#box", // この要素と交差するとイベントが発火
    },
  })
gsap.to("#scroll", {y:-5, repeat: -1, yoyo: true});

}, [])

const setbox = () => {
gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 }, // timelineのプロパティ
    scrollTrigger: {
      trigger: "#box", // この要素と交差するとイベントが発火
    },
  })
   gsap.set("#box", {
    opacity: 0,
    x: -2000,
  }),
   gsap.to("#box",{
       opacity: 1,
    x: 0,
    duration:1,
    delay:0.5
     })
}
    return (
    <>     

<div className={style.container}>
<section className={style.first} id="section">  
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
        <Header />
      <div className={style.bg} id="bg">    
     <div className={style.box} id="box">
<div className={style.document}>
  <h2 className={style.h2}>仙台NEXT水族館</h2>
  <p className={style.p}>他では見られない希少な生物がたくさんいます。<br /><br />
    ダイナミックなイルカショーや小さいお子さん連れのご家族も楽しめるアトラクションもあります。<br /><br />
    ぜひ一度お越しください。<br /><br />
    海の生物たちと私たちがお待ちしております。</p>
    <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
  </div>
     </div>
     <div className={style.footer} id="scroll">
    <Image src={"/scroll.png"} alt="demo" width={100} height={100} />
   </div>
      </div>
    </div>
  </div>
</section>

<section className={style.second} id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">    

      <div className={style.bg} id="bg">
  <h2 className={style.title}>メッセージ</h2>
<div className={style.box_flex}>   
<div className={style.box} id="box2">
<div className={style.document}>
  <h2 className={style.h2}>希少な海の生物たち</h2>

  <p className={style.p}>他では見られない希少な生物がたくさんいます。<br /><br />
  日本に生息・生育する絶滅のおそれのある海洋生物も多く飼育されています。
  <br /><br />
  ペンギンやアザラシ、イルカなどの生物もいます。
    </p>
    <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
  </div>
     </div>

     <div className={style.box} id="box2">
<div className={style.document}>
  <h2 className={style.h2}>県内最大級のイルカショー</h2>
  <p className={style.p}>平日12:00～<br />
  休日は13:00～  
    <br />イルカショーを行っています。
      <br /><br />
    スタッフとイルカの連携抜群のダイナミックなショーを楽しみましょう。
    <br /><br />
    イルカに触れあえる接触体験もあります。
    ぜひお越しください。<br />
    </p>
    <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
  </div>
     </div>




  <div className={style.box} id="box2">
    <div className={style.none}>
<div className={style.document}>
  <h2 className={style.h2}>楽しい遊び場</h2>
  <p className={style.p}>仙台NEXT水族館では普段触れ合うことのない海洋生物と触れ合える遊び場をご用意しております。<br /><br />
  ペンギンやアザラシを始めとした海洋生物への餌やり体験や実際に毛並みにも触れることができます。
    <br /><br />

    せひ実際に触れ合ってください。</p>
    <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
  </div>
     </div>
</div>
</div>
      </div>
    </div>
  </div>
</section>

<section className={style.third} id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
      <div className={style.bg} id="bg">

<div className={style.box} id="box2">

    <h2 className={style.h2}>施設紹介</h2>
<div className={style.document}>

<div className={style.wrapper}>

  <div className={style.box1}>
        <div className={style.none}>
    <p className={style.box_p}>海洞窟</p>    
  </div></div>


  <div className={style.box2}>
         <div className={style.none}>
        <p className={style.box_p}>マグロ魚群</p>  
  </div></div>

  <div className={style.box3}>     <div className={style.none}>
        <p className={style.box_p}>デメキン丸</p>  
  </div></div>

  <div className={style.box4}>
        <p className={style.box_p}>クラゲの都</p>  
  </div>

  <div className={style.box5}>
        <p className={style.box_p}>シーゲート</p>  
  </div>
  
</div>
  
    <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
  </div>
     </div>
      </div>
    </div>
  </div>
</section>

<section className={style.forth} id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
      <div className={style.bg} id="bg">
  <div className={style.document}>
    <div className={style.document2}>
     <Image src={"/logo.png"} width={500} height={200} alt="" />
    <h2 className={style.h2}>お問い合わせ</h2>
    <p className={style.p}>
      青あふれるこの水族館に来て最高のショーを見ませんか？<br /><br />
      あなたに最高の休日をお送りします。<br /><br />
      また、気になる点があればお気軽にお問い合わせください
    </p>
        <div className={style.more_box}>
      <p>お問い合わせする</p>
   </div>
  </div> 
   </div>
      </div>
    </div>
  </div>
</section>

<section className={style.fifth} id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
      <div className={style.bg} id="bg">
        <div className={style.container}>

   
   <h2 className={style.h2}>お知らせ</h2>
   <div className={style.grid}>
         <div className={style.none}>
    <div className={style.span}><div className={style.box}>
      2022/08/29<br/><br/>
      クラゲの都をリニューアルしました。

      </div></div></div>
         <div className={style.none}>
    <div className={style.span}><div className={style.box}>
            2022/07/23<br/><br/>
      シーゲートをリニューアルしました。
      
      </div></div></div>
    <div className={style.span}><div className={style.box}>
            2022/06/13<br/><br/>
      6月22日は休業といたします。
      
      </div></div>
    <div className={style.span}><div className={style.box}>
            2022/05/2<br/><br/>
      アザラシの「みぃちゃん」が生まれました。
      
      </div></div>
      </div>
        <div className={style.more_box}>
      <p>詳しく見る</p>
   </div>
      </div>   
        </div>
    </div>
  </div>
</section>

<section className={style.sixth} id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
      <div className={style.bg} id="bg">
  <div className={style.flex}>
    <div className={style.box}>
          <h2>アクセス</h2>
          <p>開園時間</p>
          <p>平日 9:00-17:30</p>
          <p>休日 10:00-18:30</p><br/>
          <p>住所</p>
          <p>仙台市 青葉区 長谷区 2-32-42</p><br/>
          <p>アクセス</p>
          <p>JR長谷駅から徒歩5分</p>
          <p>仙台駅から車で15分</p><br/>
          <p>電話番号</p>
          <p>022-888-JR55</p><br/>
          <p>シャトルバスのご案内</p>
          <div className={style.more_box}>
          <p>シャトルバスの詳細はこちら</p>
          </div>
    </div>
<div className={style.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
        defaultCenter={defaultLatLng}
        defaultZoom={16}
      />
    </div>
      </div>
    </div>
  </div>
  </div>
</section>

<section id="section">
  <div  className={style.outer} id="outer">
    <div  className={style.inner} id="inner">
      <div className={style.bg} id="bg">
      </div>
    </div>
  </div>
</section>

    </div>
 </>
  )
}

export default Home