import { ComponentProps } from '@sitecore-feaas/clientside';
import { Image, LinkField, ImageField, Link } from '@sitecore-jss/sitecore-jss-nextjs';

type NavigationLinkProps = {
  linkText: {
    field: { value: string }; // Ensure it's an object with a value field
  };
  link: {
    field: LinkField;
  };
};

interface Fields {
  data: {
    datasource: {
      headerImage: {
        Logo: ImageField;
      };
      children: {
        results: NavigationLinkProps[];
      };
    };
  };
}

type HeaderProps = ComponentProps & {
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  const { headerImage, children } = props.fields.data.datasource;
  const navLinks = children.results ?? [];

  return (
    <div className="header">
      <div className="headerimg">
        <a href="/">
          <Image field={headerImage.Logo} />
        </a>
      </div>
      <div className="headernav">
        <nav>
          {navLinks.map((navLink: NavigationLinkProps, index: number) => {
            const linkText = navLink.linkText.field.value; // Access the actual text
            const linkItem = navLink.link.field; // Access the link field

            if (!linkItem || !linkText) return null;

            return (
              <Link key={index} field={linkItem}>
                {linkText}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
