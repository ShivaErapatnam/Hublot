import { ComponentProps } from '@sitecore-feaas/clientside';
import { Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

type ProductDetailProps = ComponentProps & {
  fields: {
    Price: Field<string>;
    Title: Field<string>;
    Model: Field<string>;
    Image: ImageField;
  };
};

export const Default = (props: ProductDetailProps) => {
  return (
    <div className="productData">
      <article className="productDatasetting">
        <div className="productContent">
          <h3>{props.fields.Model.value}</h3>
          <h1>{props.fields.Title.value}</h1>
          <p>{props.fields.Price.value}</p>
          <h6>49MM</h6>
        </div>
        <div className="productimage">
          <Image field={props.fields.Image} />
        </div>
      </article>
    </div>
  );
};
