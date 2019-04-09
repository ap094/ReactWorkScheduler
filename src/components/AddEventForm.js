import React from 'react'
import { Modal, Form, Input, Select } from 'antd';
import 'antd/lib/modal/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css';
Moment.locale('hr')
momentLocalizer();

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
                <Form layout="vertical">
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
                    <FormItem label="Date" required={true} >
                    <div className="input-group">
                        <FormItem>
                            {getFieldDecorator('start', {
                                rules: [{ required: true, message: 'Please input the start date!' }],
                            })(
                                <DateTimePicker
                                    format='DD-MM-YYYY HH:mm'
                                    placeholder="Start date"
                                />
                            )}
                        </FormItem>
                        <span className="input-group-addon"></span>
                        <FormItem>
                            {getFieldDecorator('end', {
                                rules: [{ required: true, message: 'Please input the end date!' }],
                            })(
                                <DateTimePicker 
                                    format='DD-MM-YYYY HH:mm'
                                    placeholder="End date"
                                />
                            )}
                        </FormItem>
                    </div>
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