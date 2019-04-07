import React from 'react'
import { Modal, Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const AddEventForm = Form.create()(
    
    (props) => {
        const { visible, onCancel, onCreate, form, employees, colors } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="New Event"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" >
                    <FormItem label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the name of the event!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Employess">
                        {getFieldDecorator('resourceId', {
                            rules: [{ required: true, message: 'Please choose one of available employees!' }],
                        })(
                            <Select>
                                {employees.map((employe) =>
                                    <Option key={employe.id}>{employe.name}</Option>
                                )}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="Start date">
                        {getFieldDecorator('start', {
                            rules: [{ required: true, message: 'Please input the start date!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="End date">
                        {getFieldDecorator('end', {
                            rules: [{ required: true, message: 'Please input the end date!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Event color">
                        {getFieldDecorator('bgColor', {
                            rules: [{ required: true, message: 'Please choose one of available colors!' }],
                        })(
                            <Select>
                                {colors.map((color) =>
                                    <Option key={color.value}>{color.label}</Option>
                                )}
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

export default AddEventForm