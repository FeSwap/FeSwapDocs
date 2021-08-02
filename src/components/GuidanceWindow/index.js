/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function GuidanceWindow({children, imageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.GuidanceWindowWrappper}>
      {imgUrl 
        ? (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} />
          </div>)
        : (<div />)
      }
      <div className={styles.GuidanceInfoBody}>{children}</div>
    </div>
  )
}

export function FeatherIcon({children}) {
  return (
    <div className={styles.IconBody}> {children} </div>
  )
}

export default GuidanceWindow;


