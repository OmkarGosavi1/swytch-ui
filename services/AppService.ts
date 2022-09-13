import { config } from "@config/config";
import axios, { AxiosResponse } from "axios";
const newsletterHost = "https://dig-common-api.herokuapp.com/";

export const subscribeToNewsletter = (data: any): Promise<AxiosResponse> => {
  return axios.post(`${newsletterHost}newsletter/subscribe`, data);
};

export const contactService = (data: any): Promise<AxiosResponse> => {
  console.log(data);
  return axios.post(`/api/contact`, data);
};

export const getBlogListing = (): Promise<AxiosResponse> => {
  console.log(`blog- ${config.BLOG_URL}`);
  return axios.get(`${config.BLOG_URL}/wp-json/wp/v2/posts?_embed`);
};

export const getSingleBlogList = (slug: any): Promise<AxiosResponse> => {
  // console.log(`blog- ${config.BLOG_URL}`);

  return axios.get(
    `${config.BLOG_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
};
// axios;
// .request<ServerData>({
// 	url: `${config.BLOG_URL}/wp-json/wp/v2/posts?_embed`,
// })
// .then((response: any) => {
// 	console.log('response', response.data);
// 	setData(tranformBlog(response.data));
// });
