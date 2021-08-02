/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function BrowserWindow({children, minHeight, url, link}) {
  return (
    <div className={styles.browserWindow} style={{minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>{children}</div>
      <div align="center" style={{paddingBottom:'25px', verticalAlign: 'middle'}}>
        <Link className={styles.buttonsJump}
          to={useBaseUrl(`${url}`)}>
            <text style={{ textalign: 'center'}}>
              {link??'Jump'} 
            </text>
        </Link>
      </div>
    </div>
  );
}

export function LinkButton({ url, link}) {
  return (
    <div align="center" style={{paddingBottom:'25px', verticalAlign: 'middle'}}>
      <Link className={styles.buttonsJump}
      to={useBaseUrl(`${url}`)}>
        <text style={{ textalign: 'center'}}>
          {link??'Jump'} 
        </text>
      </Link>
    </div>
  );
}

export default BrowserWindow;


