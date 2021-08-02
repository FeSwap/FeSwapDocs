import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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
         to relieve price deviation at preset threshold.
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
      title={`Decentralized Crypto Exchange of Zero Fee`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">{siteConfig.title}</h2>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
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
