import React from 'react';
import { Image, ImageField, RichText, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type Hero = ComponentProps & {
  fields: {
    HeroText: RichTextField;
    HeroImage: ImageField;
  };
};

export const Default = (props: Hero): JSX.Element => {
  return (
    <div className="hero">
      <div className="heroImg">
        <Image field={props.fields.HeroImage} fill />
      </div>
      <RichText field={props.fields.HeroText} className="herotext" />
      <div className="heroCTA">
        <button>Find your Hublot watch</button>
        <button>Find a boutique</button>
        <button>Find your strap</button>
      </div>
    </div>
  );
};
export const WithoutCTA = (props: Hero): JSX.Element => {
  return (
    <div className="hero">
      <div className="heroImg">
        <Image field={props.fields.HeroImage} fill />
      </div>
      <RichText field={props.fields.HeroText} className="herotext" />
    </div>
  );
};
