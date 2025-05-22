import { ComponentProps } from '@sitecore-feaas/clientside';
import { Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

type NavigationItem = {
  linkText: string;
  link: string;
};

interface Fields {
  logo: {
    src: string;
    alt: string;
  };
  navigation: NavigationItem[];
}

type FooterProps = ComponentProps & {
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  const linkItems = props.fields.navigation;
  return (
    <div className="footer">
      <div className="footerlogo">
        <img src={props.fields.logo.src} alt={props.fields.logo.alt || 'alt-text'}></img>
      </div>
      <div className="footernav">
        <nav>
          {linkItems.map((linkItem: NavigationItem, index: number) => {
            if (!linkItem?.link) return null;
            return (
              <a key={index} href={linkItem.link}>
                {linkItem.linkText}
              </a>
            );
          })}
        </nav>
        <nav>
          <a href="">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa fa-github"></i>
          </a>
          <a href="">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="">
            <i className="fa fa-youtube"></i>
          </a>
        </nav>
      </div>
    </div>
  );
};
