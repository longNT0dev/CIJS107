// src/pages/AuthForm.tsx
import React from "react";
import {
    Form,
    Input,
    Radio,
    Switch,
    Select,
    Button,
    Typography,
    Tooltip,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const AuthForm = () => {
    const [form] = Form.useForm();

    return (
        <div
            className="
        min-h-screen flex items-center justify-center
        bg-[repeating-linear-gradient(90deg,#f6f0ff_0,#f6f0ff_40px,#fdfbff_40px,#fdfbff_80px)]
      "
        >
            <div className="w-full max-w-md mx-4">
                <div className="bg-white rounded-3xl shadow-lg px-8 py-10">
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={{
                            remember: false,
                            radioGroup: "2",
                            dropdown: "0",
                        }}
                    >
                        {/* USERNAME */}
                        <Form.Item
                            label={<span className="text-sm font-medium text-gray-700">Username</span>}
                            name="username"
                        >
                            <Input
                                size="large"
                                placeholder="Enter username"
                                className="rounded-xl border-gray-300 focus:border-purple-500 focus:shadow-none"
                            />
                        </Form.Item>

                        {/* PASSWORD */}
                        <Form.Item
                            label={<span className="text-sm font-medium text-gray-700">Password</span>}
                            name="password"
                            extra={
                                <span className="text-xs text-gray-400">
                                    Your password is between 4 and 12 characters
                                </span>
                            }
                        >
                            <Input.Password
                                size="large"
                                placeholder="Enter password"
                                className="rounded-xl border-gray-300 focus:border-purple-500 focus:shadow-none"
                            />
                        </Form.Item>

                        {/* INPUT TEXT LABEL – ERROR STATE */}
                        <Form.Item
                            label={
                                <span className="text-sm font-medium text-gray-700">
                                    Input Text Label
                                </span>
                            }
                            name="typing"
                            validateStatus="error"
                            help={
                                <span className="text-xs text-red-500">
                                    Error message informing me of a problem
                                </span>
                            }
                        >
                            <Input
                                size="large"
                                defaultValue="Typing |"
                                className="rounded-xl border-red-400 text-gray-800 focus:border-red-500 focus:shadow-none"
                                suffix={
                                    <Tooltip title="There is a problem">
                                        <ExclamationCircleOutlined className="text-red-500" />
                                    </Tooltip>
                                }
                            />
                        </Form.Item>

                        {/* REMEMBER ME & SWITCH */}
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Switch
                                        size="small"
                                        className="bg-gray-200"
                                    />
                                </Form.Item>
                                <span className="text-sm text-gray-700">Remember me</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <span className="text-sm text-gray-500">Off</span>
                                <Form.Item
                                    name="switch"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Switch size="small" />
                                </Form.Item>
                            </label>
                        </div>

                        {/* RADIO GROUP */}
                        <Form.Item className="mb-6">
                            <Radio.Group name="radioGroup" className="flex flex-col gap-2">
                                <Radio value="1" className="text-sm text-gray-700">
                                    Radio selection 1
                                </Radio>
                                <Radio value="2" className="text-sm text-gray-700">
                                    Radio selection 2
                                </Radio>
                                <Radio value="3" className="text-sm text-gray-700">
                                    Radio selection 3
                                </Radio>
                            </Radio.Group>
                        </Form.Item>

                        {/* DROPDOWN */}
                        <Form.Item
                            label={
                                <span className="text-sm font-medium text-gray-700">
                                    Dropdown Title
                                </span>
                            }
                            name="dropdown"
                        >
                            <Select
                                size="large"
                                className="
                  rounded-xl
                  [&_.ant-select-selector]:!rounded-xl
                  [&_.ant-select-selector]:!border-purple-400
                  [&_.ant-select-selector]:!shadow-none
                  [&_.ant-select-selection-item]:!text-gray-800
                "
                                dropdownClassName="rounded-xl"
                                options={[
                                    { label: "Dropdown option", value: "0" },
                                    { label: "Dropdown option 1", value: "1" },
                                    { label: "Dropdown option 2", value: "2" },
                                ]}
                                placeholder="Dropdown option"
                            />
                        </Form.Item>

                        {/* BUTTONS */}
                        <div className="mt-8 flex justify-between">
                            <Button
                                size="large"
                                className="px-10 rounded-2xl border-2 border-purple-400 text-purple-500 bg-transparent hover:!bg-purple-50"
                            >
                                Cancel
                            </Button>

                            <Button
                                size="large"
                                type="primary"
                                className="px-10 rounded-2xl bg-purple-500 hover:!bg-purple-600 border-none shadow-md"
                            >
                                Next
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
