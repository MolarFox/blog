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

                  <h5>G&apos;day! I&apos;m RJ / Molar, welcome to my blog!</h5>

                  <p>I&apos;m a senior software engineer, QRP HAM radio operator, car guy, and vulpine-friend-to-the-caprines from Naarm Australia.</p>
                  <p>I live with my workshop supervisor, Nitro (a beagle).</p>
                  <p>We spend our spare time building and/or tearing apart stuff in my workshop, or going out for hikes and offroading trips to do radio activations amongst the local wildlife.</p>

                  <p>Everything on this site is 100% human written and created. Every typo and grammatical mistake has been hand crafted for your reading pleasure.</p>
                  <br />

                  <h2>What I write about</h2>
                  <p>Tech, software, projects, and stories from being a software engineer and engineering manager. I love messing with hardware and low-level code, and getting lost down math rabbit holes.</p>

                  <p>I wear a lot of different hats and have multiple very different jobs outside of just SWE&apos;ing, so expect lots of correspondingly varied stuff on here. :p</p>
                  <br />

                  <h2>What I care about most</h2>
                  {/* <p>I value legacy, and leaving one that contains a lot of good in it. There&apos;s no way to phrase it at this high a level without sounding at least a little preachy, but I reckon doing tangible, moral, good - whatever that means for you - with your available time and skills is one of the more important bits of life. A critical metric of &apos;moral success&apos;, which should hold as much weight as all the usual metrics of &apos;success&apos; in life do.</p>

                    <p>More specifically, I do this for example by dedicating some assets to supporting local orgs and charities, spending a bunch of my time donating plasma, running a blood donor group, looking after sanctuary animals, etc.</p>

                    <p>And y&apos;know, in an immediate timeframe, doing this means I get to pet a lot of goats and get a lot of free Red Cross sausage rolls :p.</p> */}

                  <p>Open source, right to repair, animal advocacy, and &apos;medical philantropy&apos;.</p>

                  <p>That last one seems to be the bounding category for donating blood (and is an excuse to say &apos;medical philantropy&apos;). I&apos;ve been donating blood and plasma since I was 18, and have given 75+ donations so far. I also run a blood donation group to do the the blood-for-sausage-rolls exchange with friends.</p>

                  <p>At my nearby animal sanctuary, I&apos;m a permanent volunteer looking after rescued farm animals.</p>

                  <p>In my opinion, doing good with your time and skills to achieve &apos;moral success&apos; is just as important as doing all the usual things we count towards &apos;success&apos; in life. That said, I also think words on a page are just words on a page! so as you read stuff here on my blog and learn more about me, I trust you&apos;ll see more about how I live this principle in practice too.</p>
                  <br />

                  <h2>How I started writing</h2>
                  <p>As a kid I had a DSi, and since I couldn&apos;t watch Youtube on it, little kid RJ would stay up late with a DSi and a stylus writing on <a href="https://scp-wiki.wikidot.com/">the SCP wiki</a> instead. Back then there were less than 2000s SCPs written and the community was pretty small, a far cry from how big the wiki is now!</p>
                  <p>I haven&apos;t (publically) made any fiction works since then - writing about real life and real tech has taken all my attention since then. Aside from my blog here I&apos;d love to get back into more creative writing at some point, and share some worldbuilding I&apos;ve been quietly working on</p>
                  <br />

                  <h2>What&apos;s with all the foxes?</h2>
                  <p>They&apos;re clever and fluffy dinguses.</p>

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
