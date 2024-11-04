import { ComponentObjectPropsOptions, ExtractPropTypes, ExtractPublicPropTypes, PropType } from "vue";

export interface Props {
  name: string;
}

export const componentProps = {
  name: {
    type: String as PropType<string>,
    required: true,
  },
} as ComponentObjectPropsOptions<Props>;

export type ParentPublicProps = ExtractPublicPropTypes<typeof componentProps>;
export type ParentProps = ExtractPropTypes<typeof componentProps>;
