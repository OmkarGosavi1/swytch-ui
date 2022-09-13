import { Button, Form, Input, notification, Select } from "antd";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { contactService } from "services/AppService";
import { panelAtom } from "src/_state/panel";
import s from "./Contact.module.scss";
import { FormRule } from "./formRule";

const Contact: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ value, type }, setPanel] = useRecoilState(panelAtom);

  const [form] = Form.useForm();
  const { Option } = Select;

  const Themes = [
    "Group/identity",
    "Group / Governance",
    "Group/ Key figures",
    `Shareholder / shareholders' club`,
    "Document orders",
    "Media",
    "Commitments/ Environment",
    "Commitments / Social Responsibility",
    "Commitment/ Corporate patronage",
    "Commitment / Protection for DIG group brands",
    "Talents/ Human Resources",
    "Personal data/ Newsletter, press releases",
    "Personal data/ Talents",
    "Work",
    "Partnership",
    "",
  ];

  const Profile = [
    "Individual",
    "Professional/ Company",
    "Individual Shareholders",
    "Financial analysts/ Investors/ SRI analysts",
    "Media",
    "Candidates",
    "Students",
  ];

  const onFinish = async (formData: any) => {
    setIsLoading(true);

    try {
      const response = await contactService({
        ...formData,
        Company: formData.Company || "",
        Function: formData.Function || "",
      });
      notification.success({
        message: "Thank You for contacting us. We will get back to you soon.",
      });
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.data.message) {
        notification.error({ message: error.response.data.message });
        return;
      }
      notification.error({ message: "Something went wrong" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // console.log("IN SIDEPANEL", value, type);
  }, [value, type]);
  return (
    <div className={`${s.container} contacts`}>
      {/* <div className="container"> */}
      <div className="align-center">
        <span className={`default-heading h3 ${s.pageTitle}`}>
          Get in touch
        </span>
      </div>
      <Form form={form} onFinish={onFinish}>
        {/* <div className={s.formItem}>
					<span className={s.label}>
						Please Complete the Following Information
					</span>
					<Form.Item name="Title" label="Title" rules={FormRule.commonRequired}>
						<Radio.Group>
							<Radio value="Mr.">Mr</Radio>
							<Radio value="Mrs.">Mrs</Radio>
							<Radio value="Ms.">Ms</Radio>
						</Radio.Group>
					</Form.Item>
				</div> */}
        <div className={s.title}>
          Leave your details below and we will get in touch with you as soon as
          possible.
        </div>
        <div className="row no-gutters">
          <div className="col-md-6 ">
            <div className={s.formItem}>
              {/* <span className={s.label}>First Name*</span> */}
              <Form.Item name="firstname" rules={FormRule.commonRequired}>
                <Input placeholder="First Name*" autoComplete={"nope"} />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.formItem}>
              {/* <span className={s.label}>Last Name*</span> */}
              <Form.Item name="lastname" rules={FormRule.commonRequired}>
                <Input placeholder="Surname*" autoComplete={"nope"} />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.formItem}>
              {/* <span className={s.label}>Company</span> */}
              <Form.Item name="company">
                <Input placeholder="Company" autoComplete={"nope"} />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-6">
            <div className={s.formItem}>
              {/* <span className={s.label}>Function</span> */}
              <Form.Item name="linkedin" rules={FormRule.commonRequired}>
                <Input placeholder="Linkedin*" autoComplete={"nope"} />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12">
            <div className={s.formItem}>
              {/* <span className={s.label}>Email*</span> */}
              <Form.Item name="email" rules={FormRule.email}>
                <Input placeholder="Email*" autoComplete={"nope"} />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12">
            <div className={s.formItem}>
              {/* <span className={s.label}>Contact Number</span> */}
              <Form.Item
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "A numeric value must be entered",
                    pattern: new RegExp(/^[0-9]+$/),
                  },
                ]}
              >
                <Input placeholder="Phone*" />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12">
            <div className={s.formItem}>
              {/* <span className={s.label}>Please Select a Theme*</span> */}
              <div className={s.symbol}>
                <div className={s.imgWrapper}>
                  <Image
                    src={`/images/icons/arrow-down.svg`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              {type != null && (
                <Form.Item name="Theme" rules={FormRule.commonRequired}>
                  {/* <h1>{type}</h1> */}
                  {/* <i className="fas fa-chevron-down"></i> */}

                  <Select
                    placeholder="Select topic*"
                    defaultValue={type == "" ? null : type}
                    //   suffixIcon={<DynamicIcon type="Email" />}
                  >
                    {Themes.map((item, i) => (
                      <Option value={item} key={i}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
            </div>
          </div>
          {/* 
          <div className="col-md-12">
            <div className={s.formItem}>
              <Form.Item name="Profile" rules={FormRule.commonRequired}>
                <Select
                  placeholder="Select your profile"
                  suffixIcon={<DynamicIcon type="Email" />}
                >
                  {Profile.map((item, i) => (
                    <Option value={item} key={i}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className={`${s.formItem} textArea`}>
              {/* <span className={s.label}>Message*</span> */}
              <Form.Item name="message" rules={FormRule.commonRequired}>
                <Input.TextArea
                  rows={5}
                  maxLength={1000}
                  showCount
                  placeholder="Your Message*"
                  autoComplete={"nope"}
                />
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12">
            <div className={`${s.formAaction} submit`}>
              <Form.Item>
                <Button
                  // type="primary"
                  htmlType="submit"
                  loading={isLoading}
                  className={`btn-secondary ${s.btnSubmit}`}
                >
                  Send
                </Button>
              </Form.Item>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-sm-12">
                <div className={s.address}> contact@xyzzy.ai</div>
              </div>

              <div className="col-sm-12">
                <div className={s.address}>
                  {/* 5237 Summerlin Commons, Blvd, Suite 400, Fort Myers, FL 33907,
                  Miami, USA */}
                </div>
              </div>
              {/* <div className="col-sm-6">
                <div className={s.address}>
                  <u>
                    {" "}
                    <a href="mailto:info@decentralisedinvestment.group">
                      info@decentralisedinvestment.group
                    </a>
                  </u>
                  <br /> +971 58 568 7432
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Form>
      {/* 
				<div className={s.info}>
					<span className={s.label}>Email</span>
					<a href="mailto:info@decentralisedinvestment.group">
						info@decentralisedinvestment.group
					</a>
				</div>
				<div className={s.info}>
					<span className={s.label}>Phone</span>
					<a href="tel:+971585687432">+971 58 568 7432</a>
				</div>
				<div className={s.info}>
					<span className={s.label}>Address</span>
					<p>
						Burj Khalifa, 143rd Floor,
						<br /> Downtown Dubai, United Arab <br />
						Emirates
					</p>
				</div> */}
      {/* </div> */}
    </div>
  );
};

export default Contact;
