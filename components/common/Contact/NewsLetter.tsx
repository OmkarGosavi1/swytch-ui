import { FC, useState } from 'react';
import {
	Form,
	notification,
	Button,
	Input,
	Select,
	Radio,
	Checkbox,
} from 'antd';
import s from './Contact.module.scss';
import { subscribeToNewsletter } from 'services/AppService';

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
	const { Option } = Select;

	const onFinish = async (formData: any) => {
		setIsLoading(true);

		try {
			const response = await subscribeToNewsletter({
				...formData,
				source: 'dig',
			});
			notification.success({
				message: response.data.message,
				placement: 'bottomRight',
			});
		} catch (error: any) {
			if (error.response.data.message !== undefined) {
				notification.error({
					message: error.response.data.message,
					placement: 'bottomRight',
				});
				return;
			}
			notification.error({
				message: 'Something went wrong',
				placement: 'bottomRight',
			});
		} finally {
			setIsLoading(false);
		}
		setIsLoading(false);
	};
	return (
		<div className={`${s.container} ${s.newsletter} site-newsletter`} id="newsletter">
			<div className="container">
				<div className="align-center">
					<span className={`default-heading h3 ${s.pageTitle}`}>
						Subscribe to Our Newsletter
					</span>
				</div>
				<Form form={form} onFinish={onFinish}>
					<div className="row">
						<div className="col-md-6">
							<div className={s.formItem}>
								<span className={s.label}>First Name</span>
								<Form.Item
									name="firstName"
									rules={[
										{
											required: true,
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
						</div>
						<div className="col-md-6">
							<div className={s.formItem}>
								<span className={s.label}>Last Name</span>
								<Form.Item
									name="lastName"
									rules={[
										{
											required: true,
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
						</div>
						<div className="col-md-12">
							<div className={s.formItem}>
								<span className={s.label}>Email</span>
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											type: 'email',
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
						</div>

						<div className="col-md-12">
							<div className={s.formAaction}>
								<Form.Item>
									<div className={s.secondRow}>
										<Form.Item
											name="agreement"
											valuePropName="checked"
											rules={[
												{
													validator: (_, value: any) =>
														value
															? Promise.resolve()
															: Promise.reject(
																new Error('Should accept agreement')
															),
												},
											]}
										>
											<Checkbox
												checked={checked}
												onChange={onChangeCheck}
												className={textAnimate ? s.animateText : ""}>
												{/* I have read the <a href="">agreement</a> */}
												“By clicking “Subscribe”, I agree to the Decentralised
												Investment Group (DIG) Inc. Terms of Use, Privacy Policy
												and Cookie Policy. I also agree to receive emails from
												DIG Inc., and I understand that I may opt out of DIG
												Inc. subscriptions at any time. We are committed to
												keeping your information confidential. We will never
												sell your information to any third parties”
											</Checkbox>
										</Form.Item>
									</div>
									<Button
										type="primary"
										htmlType="submit"
										loading={isLoading}
										onClick={onClickSubmit}
										className={`btn-app-default ${s.btnSubmit}`}
									>
										Subscribe
									</Button>
								</Form.Item>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default NewsLetter;
