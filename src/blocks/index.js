import React from 'react';

import LightBlogA from './blog/light/a';
import LightBlogB from './blog/light/b';
import LightBlogC from './blog/light/c';
import LightBlogD from './blog/light/d';
import LightBlogE from './blog/light/e';

import LightContactA from './contact/light/a';
import LightContactB from './contact/light/b';
import LightContactC from './contact/light/c';

import LightContentA from './content/light/a';
import LightContentB from './content/light/b';
import LightContentC from './content/light/c';
import LightContentD from './content/light/d';
import LightContentE from './content/light/e';
import LightContentF from './content/light/f';
import LightContentG from './content/light/g';
import LightContentH from './content/light/h';

import LightCTAA from './cta/light/a';
import LightCTAB from './cta/light/b';
import LightCTAC from './cta/light/c';
import LightCTAD from './cta/light/d';

import LightEcommerceA from './ecommerce/light/a';
import LightEcommerceB from './ecommerce/light/b';
import LightEcommerceC from './ecommerce/light/c';

import LightFeatureA from './feature/light/a';
import LightFeatureB from './feature/light/b';
import LightFeatureC from './feature/light/c';
import LightFeatureD from './feature/light/d';
import LightFeatureE from './feature/light/e';
import LightFeatureF from './feature/light/f';
import LightFeatureG from './feature/light/g';
import LightFeatureH from './feature/light/h';

import LightFooterA from './footer/light/a';

import LightFondationsA from './foundations/light/a';
import LightFondationsB from './foundations/light/b';

import LightGalleryA from './gallery/light/a';
import LightGalleryB from './gallery/light/b';
import LightGalleryC from './gallery/light/c';

import LightHeaderA from './header/light/a';

import LightHeroA from './hero/light/a';
import LightHeroB from './hero/light/b';
import LightHeroC from './hero/light/c';
import LightHeroD from './hero/light/d';
import LightHeroE from './hero/light/e';
import LightHeroF from './hero/light/f';

import LightPricingA from './pricing/light/a';
import LightPricingB from './pricing/light/b';

import LightStatisticA from './statistic/light/a';
import LightStatisticB from './statistic/light/b';
import LightStatisticC from './statistic/light/c';

import LightStepA from './step/light/a';
import LightStepB from './step/light/b';
import LightStepC from './step/light/c';

import LightTeamA from './team/light/a';
import LightTeamB from './team/light/b';
import LightTeamC from './team/light/c';

import LightTestimonialA from './testimonial/light/a';
import LightTestimonialB from './testimonial/light/b';
import LightTestimonialC from './testimonial/light/c';

export default function getBlock({theme = 'indigo'}) {
  return {
    Blog: {
      BlogA: <LightBlogA theme={theme} />,
      BlogB: <LightBlogB theme={theme} />,
      BlogC: <LightBlogC theme={theme} />,
      BlogD: <LightBlogD theme={theme} />,
      BlogE: <LightBlogE theme={theme} />
    },
    Contact: {
      ContactA: <LightContactA theme={theme} />,
      ContactB: <LightContactB theme={theme} />,
      ContactC: <LightContactC theme={theme} />,
    },
    Content: {
      ContentA: <LightContentA theme={theme} />,
      ContentB: <LightContentB theme={theme} />,
      ContentC: <LightContentC theme={theme} />,
      ContentD: <LightContentD theme={theme} />,
      ContentE: <LightContentE theme={theme} />,
      ContentF: <LightContentF theme={theme} />,
      ContentG: <LightContentG theme={theme} />,
      ContentH: <LightContentH theme={theme} />
    },
    CTA: {
      CTAA: <LightCTAA theme={theme} />,
      CTAB: <LightCTAB theme={theme} />,
      CTAC: <LightCTAC theme={theme} />,
      CTAD: <LightCTAD theme={theme} />
    },
    Ecommerce: {
      EcommerceA: <LightEcommerceA theme={theme} />,
      EcommerceB: <LightEcommerceB theme={theme} />,
      EcommerceC: <LightEcommerceC theme={theme} />
    },
    Feature: {
      FeatureA: <LightFeatureA theme={theme} />,
      FeatureB: <LightFeatureB theme={theme} />,
      FeatureC: <LightFeatureC theme={theme} />,
      FeatureD: <LightFeatureD theme={theme} />,
      FeatureE: <LightFeatureE theme={theme} />,
      FeatureF: <LightFeatureF theme={theme} />,
      FeatureG: <LightFeatureG theme={theme} />,
      FeatureH: <LightFeatureH theme={theme} />
    },
    Fondations: {
      FondationsA: <LightFondationsA theme={theme} />,
      FondationsB: <LightFondationsB theme={theme} />
    },
    Footer: {
      FooterA: <LightFooterA theme={theme} />
    },
    Gallery: {
      GalleryA: <LightGalleryA theme={theme} />,
      GalleryB: <LightGalleryB theme={theme} />,
      GalleryC: <LightGalleryC theme={theme} />
    },
    Header: {
      HeaderA: <LightHeaderA theme={theme} />
    },
    Hero: {
      HeroA: <LightHeroA theme={theme} />,
      HeroB: <LightHeroB theme={theme} />,
      HeroC: <LightHeroC theme={theme} />,
      HeroD: <LightHeroD theme={theme} />,
      HeroE: <LightHeroE theme={theme} />,
      HeroF: <LightHeroF theme={theme} />
    },
    Pricing: {
      PricingA: <LightPricingA theme={theme} />,
      PricingB: <LightPricingB theme={theme} />
    },
    Statistic: {
      StatisticA: <LightStatisticA theme={theme} />,
      StatisticB: <LightStatisticB theme={theme} />,
      StatisticC: <LightStatisticC theme={theme} />
    },
    Step: {
      StepA: <LightStepA theme={theme} />,
      StepB: <LightStepB theme={theme} />,
      StepC: <LightStepC theme={theme} />
    },
    Team: {
      TeamA: <LightTeamA theme={theme} />,
      TeamB: <LightTeamB theme={theme} />,
      TeamC: <LightTeamC theme={theme} />
    },
    Testimonial: {
      TestimonialA: <LightTestimonialA theme={theme} />,
      TestimonialB: <LightTestimonialB theme={theme} />,
      TestimonialC: <LightTestimonialC theme={theme} />
    }
  }
}

