/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ShowWindow({title, children}) {
  return (
    <div className={styles.ShowWindowWrappper} >
      <h1 className="hero__title">{title}</h1>
      <div className={styles.TextInfoBody} >{children}</div>
    </div>
  )
}

export default ShowWindow;


