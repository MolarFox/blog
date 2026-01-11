import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

import imgNitroEarPoint from '../content/media/_top_level/about/nitro_ear_point.jpg';
import imgRjNitroCliffrock from '../content/media/_top_level/about/rj_nitro_cliffrock.jpg';
import imgFidgetStupidHatClub from '../content/media/_top_level/about/fidget_stupid_hat_club.jpg';
import vidGoatAffection from '../content/media/_top_level/about/goat_affection.mp4';
import vidFriendlyUnicornCaprine from '../content/media/_top_level/about/friendly_unicorn_caprine.mp4';
import imgFoxCroissant from '../content/media/_top_level/about/fox_croissant.jpg';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }

  .video-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    & > video {
      flex: 1;
      min-width: 300px;
      max-width: 512px;
    }
  }
`;

function About() {
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">About</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  {/* writing an about me is hard dude. who even am i */}

                  <h1>G&apos;day! I&apos;m RJ / Molar, welcome to my blog!</h1>

                  <img style={{ maxWidth: '600px', width: '100%' }} src={imgRjNitroCliffrock} alt={"A photograph of me and Nitro, my dog, on a hike. We're facing away from the camera, atop a big rock seen in the foreground. In the background is a nice landscape of grassy mountains and misty skies, with a slight bokeh effect. Photograph by Rex Rh0vs."}/>

                  <p>I&apos;m a senior software engineer, QRP HAM radio operator, car guy, and vulpine-friend-to-the-caprines from Naarm Australia.</p>
                  <p>I live with my workshop supervisor, Nitro (seen below, during his lunch break).</p>

                  <img style={{ maxWidth: '512px', width: '100%' }} src={imgNitroEarPoint} alt={"A photograph of Nitro the beagle, laying down in a half-curled up position on his doggy bed beside my couch. He's got one eye open, and his left floppy ear is pointing like an arrow to the right of the image in his current position. Photograph by me"}/>

                  <p>We spend our spare time building and/or tearing apart stuff in my workshop, or going out for hikes and offroading trips to do radio activations amongst the local wildlife.</p>

                  <p>Everything on this site is 100% human written and created. Every typo and grammatical mistake has been hand crafted for your reading pleasure.</p>
                  <br />

                  <h2>What I write about</h2>

                  <p>Tech, software, projects, and stories from software engineering + software engineering management. I love messing with hardware and low-level code, and getting lost down math rabbit holes.</p>

                  <p>I wear a lot of different hats and have multiple very different jobs outside of just SWE&apos;ing, so expect lots of correspondingly varied stuff on here!</p>
                  <br />

                  <img style={{ maxWidth: '512px', width: '100%' }} src={imgFidgetStupidHatClub} alt={"Screencap from the game 'Dust: An Elysian Tail', in which Fidget the nimbat is making fun of the hats Dust and the shopkeeper are wearing. Above her chat box is instead a photoshopped in image of blue scout and red demoman from TF2, wearing some common TF2 hats. Screenshot not taken or photoshopped by me"} />

                  <h2>What I care about most</h2>

                  {/* <p>I value legacy, and leaving one that contains a lot of good in it. There&apos;s no way to phrase it at this high a level without sounding at least a little preachy, but I reckon doing tangible, moral, good - whatever that means for you - with your available time and skills is one of the more important bits of life. A critical metric of &apos;moral success&apos;, which should hold as much weight as all the usual metrics of &apos;success&apos; in life do.</p>

                    <p>More specifically, I do this for example by dedicating some assets to supporting local orgs and charities, spending a bunch of my time donating plasma, running a blood donor group, looking after sanctuary animals, etc.</p>

                    <p>And y&apos;know, in an immediate timeframe, doing this means I get to pet a lot of goats and get a lot of free Red Cross sausage rolls :p.</p> */}

                  <p>Open source, right to repair, animal advocacy, and &apos;medical philantropy&apos;.</p>

                  <p>That last one seems to be the bounding category for donating blood (and is an excuse to say &apos;medical philantropy&apos; :p). I&apos;ve been donating blood and plasma since I was 18, and have given 75+ donations so far. I also run a blood donation group to do the the blood-for-sausage-rolls exchange with friends.</p>

                  <p>At my nearby animal sanctuary, I&apos;m a permanent volunteer looking after rescued farm animals. I love all the animals and take care of em all equally - don&apos;t get me wrong, I try not to play favourites among species - but I have a soft spot for the many goats I get to hang out with!</p>

                  <div className="video-container">
                    <video loop autoPlay muted src={vidGoatAffection} preload="auto" />
                    <video loop autoPlay muted src={vidFriendlyUnicornCaprine} preload="auto" />
                  </div>

                  <p>In my opinion, doing good with your time and skills to achieve &apos;moral success&apos; is just as important as doing all the usual things we count towards &apos;success&apos; in life. That said, I also think words on a page are just words on a page! so as you read stuff here on my blog and learn more about me, I trust you&apos;ll see more about how I live this principle in practice too.</p>
                  <br />

                  <h2>How I started writing</h2>

                  <p>As a kid I had a DSi, and since I couldn&apos;t watch Youtube on it, little kid RJ would stay up late with a DSi and a stylus writing on <a href="https://scp-wiki.wikidot.com/">the SCP wiki</a> instead. Back then there were less than 2000s SCPs written and the community was pretty small, a far cry from how big the wiki is now!</p>

                  <p>I haven&apos;t (publically) made any fiction works since then. Aside from my blog here I&apos;d love to get back into more creative writing at some point, and share some worldbuilding I&apos;ve been quietly working on.</p>
                  <br />

                  <h2>What&apos;s with all the foxes?</h2>

                  <p>They&apos;re clever and fluffy dinguses.</p>

                  <img style={{ maxWidth: '512px', width: '100%' }} src={imgFoxCroissant} alt="A close-up photograph of a fox kit curled up asleep in a ball on some grassy sand, in a sunny environment. Photograph by Artur Rydzewski." />

                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;
