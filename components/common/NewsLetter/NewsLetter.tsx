import { FC, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import s from "./NewsLetter.module.scss";
import { subscribeToNewsletter } from "services/misc";
import Checkbox from "antd/lib/checkbox/Checkbox";

const NewsLetter: FC = () => {
  const [checked, setChecked] = useState(false);
  const [textAnimate, setTextAnimate] = useState(false);
  const onChangeCheck = (e: any) => {
    setChecked(e.target.checked);
    setTextAnimate(false);
  };

  const onClickSubmit = () => {
    if (checked) {
      setTextAnimate(false);
    } else {
      setTextAnimate(true);
      setTimeout(() => {
        setTextAnimate(false);
      }, 1000);
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (formData: any) => {
    setIsLoading(true);
    try {
      const response = await subscribeToNewsletter({
        ...formData,
        source: "swytch-web3",
      });
      notification.success({
        message: response.data.message,
        placement: "bottomRight",
      });
    } catch (error: any) {
      if (error.response.data.message !== undefined) {
        notification.error({
          message: error.response.data.message,
          placement: "bottomRight",
        });
        return;
      }
      notification.error({
        message: "Something went wrong",
        placement: "bottomRight",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={s.container}>
      <span className={s.heading}></span>
      <Form
        className={`${s.form} newsletter theme-form`}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          className={`${s.email} email`}
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Button
          className={`btn-app-default  ${s.btn}`}
          loading={isLoading}
          htmlType="submit"
          onClick={onClickSubmit}
        >
          <span className={s.hidden}>Subscribe</span>
        </Button>
        <Button
          className={`btn-app-default  ${s.btn} ${s.btn2}`}
          loading={isLoading}
          // htmlType="submit"
          // onClick={onClickSubmit}
        >
          <span className={s.hidden}>Subscribe</span>
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetter;
