import React from 'react';
import { Helmet } from 'react-helmet';

export default function AddSchema({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{data}</script>
    </Helmet>
  );
}
