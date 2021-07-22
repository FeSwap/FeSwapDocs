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
        FeSwap NFT represents the owner of the specific swap pair. It can keep making profits for its owner,
        and can also be resaled openly.  
      </>
    ),
    Url: 'NFT',
    link: 'Get FeSwap NFT'
  },
  {
    title: 'FeSwap Exchange',
    imageUrl: 'img/Coin.png',
    description: (
      <>
        FeSwap Exchange supports swapping ERC20 tokens purely with no exchange fee. 
        Surfing the Defi wave, enjoying the crypto wealth together with Feswap.
      </>
    ),
    Url: 'swap',
    link: 'Exchange Tokens'
  },
  {
    title: 'Borrowing on Liquidity',
    imageUrl: 'img/Loan.png',
    description: (
      <>
        Mortage on FeSwap liquidty token, borrow in stable coins to invest on your favorite tokens and add more value to your crpytocurreny. 
      </>
    ),
    Url: 'borrow',
    link: 'Borrow Coins'
  },
  {
    title: 'How to be Free',
    imageUrl: 'img/Protocol.png',
    description: (
      <>
        Two one-way swap sub-pools are created for one token pair. Internal arbitrage are conducted
         to smooth price deviation at preset threshold.
      </>
    ),
    Url: 'docs/FreeSwap/abstract',
    link: 'FreeSwap Protocol'
  },
  {
    title: 'FeSwap Community',
    imageUrl: 'img/Community.png',
    description: (
      <>
        FESW as the FeSwap govenance token are freely distributed to NFT owners, liquidity providers, 
        swappers, developers, community participators.  
      </>
    ),
    Url: 'docs/FeSwap/introduction',
    link: 'FeSwap Governance'
  },
  {
    title: 'FeSwap Milstone',
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
      <p>{description}</p>
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
      title={`First Free Decentralized AMM Exchange`}
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
            <div className="container">
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