import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ShowWindow from '@site/src/components/ShowWindow';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { LinkButton } from '@site/src/components/BrowserWindow';

const features = [
  {
    title: 'FeSwap NFT',
    imageUrl: 'img/Art.png',
    description: (
      <>
        FeSwap NFT testifies the owner of specific swap pair. Hodling FeSwap NFT makes profits for its owner.
        It can also be put up for sale publicly.  
      </>
    ),
    Url: 'NFT',
    link: 'How To Get FeSwap NFT'
  },
  {
    title: 'FeSwap Exchange',
    imageUrl: 'img/Coin.png',
    description: (
      <>
        FeSwap Exchange supports swapping ERC20 tokens completely with no exchange fee. 
        Surfing the Defi, making the crypto wealth together with Feswap.
      </>
    ),
    Url: 'swap',
    link: 'How to Exchange Tokens'
  },
  {
    title: 'Providing Liquidity',
    imageUrl: 'img/Tidal.png',
    description: (
      <>
        Providing Liquidity to FeSwap can make competitive automated market maker profit from the tidal crypto market ups and downs.</>
    ),
    Url: 'Liquidity',
    link: 'How to Provide Liquidity'
  },
  {
    title: 'How could be Free',
    imageUrl: 'img/Protocol.png',
    description: (
      <>
        Two one-way swap sub-pools are created for each token pair. Internal arbitrage are triggered
         to smooth price deviation at preset threshold.
      </>
    ),
    Url: 'docs/FreeSwap/abstract',
    link: 'FeSwap Protocol'
  },
  {
    title: 'FeSwap Community',
    imageUrl: 'img/Community.png',
    description: (
      <>
        FESW, FeSwap govenance tokens, are distributed to NFT owners, liquidity providers, 
        exchange users, developers, community members freely.  
      </>
    ),
    Url: 'docs/FeSwap/introduction',
    link: 'FeSwap Governance'
  },
  {
    title: 'FeSwap Technicals',
    imageUrl: 'img/Build.png',
    description: (
      <>
        FeSwap will be run in ETH mainnet first, then ETH layer-2 network, BSC, and so on. We are stepping forward steadily.
        <br/>  
      </>
    ),
    Url: 'blog',
    link: 'Know More ... '
  },
];

function Feature({imageUrl, title, description, Url, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 align="left">{title}</h3>
      <p  >{description}</p>
      <div align="center">
        <Link className={styles.buttons}
          to={useBaseUrl(`${Url}`)}>
            {link} 
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Decentralized Crypto Exchange with Zero Commision Fee`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">{siteConfig.title}</h2>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.blacktext}>This is an experiment. FeSwap is not the custody of your crypto asset. 
                                          Please take your own risk to use FeSwap application. <br/>
                                          FeSwap targets to provide decentralized crypto exchange without charging 
                                          any commision fee, but make competitive profits for the liquidity providers.
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <ShowWindow title="FeSwap is Live on Polygon">
            <div>
              <p className={styles.showtext}>💰️ All token pair NFTs are freely minted </p>
              <p className={styles.showtext}>💰️ Each minter of each token pair NFT gets 3000 FESW@M freely</p>
              <p className={styles.showtext}>💰️ Owner of each token pair NFT shares 60% of the respective protocol profit</p>
              <p className={styles.showtext}>💰️ Five liquidity pools are open for yield farming</p>
              <p className={styles.showtext}>💰️ 20% of the governance token air airdropped to NFT bidders </p>
              <p className={styles.showtext}>💰️ 50% of the governance token air airdropped to Liquidity providers </p>
              <LinkButton url="https://app.feswap.io/#/nft" link="Bid the token pair NFT ↗" />
            </div>
          </ShowWindow>
        </div>

        <div className="container">
          <div className={styles.separator}> </div>
        </div>

        {features && features.length > 0 && (
          <section className={styles.section}>
            <div className="container" >
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
