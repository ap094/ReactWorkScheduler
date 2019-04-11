import React from 'react'
import { Modal, Form, Input, Select } from 'antd';
import 'antd/lib/modal/style/index.css'
import 'antd/lib/form/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/input/style/index.css'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css';
Moment.locale('hr')
momentLocalizer();

const FormItem = Form.Item;
const Option = Select.Option;

class AddEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        const form = this.props.form;
        this.setState({ visible: false });
        form.resetFields();
    }
    handleCreate = () => {
        const form = this.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.props.addEvent(values.title, values.start, values.end, values.resourceId, values.bgColor)
            form.resetFields();
            this.setState({ visible: false });
        });
        
    }
    saveFormRef = (form) => {
        this.props.form = form;
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { employees, colors } = this.props;
        return(
        <div>
        <button onClick={this.showModal} className="btn btn-primary btn-sm">Add new event</button>
        <Modal
            visible={this.state.visible}
            title="New Event"
            okText="Create"
            onCancel={this.handleCancel}
            onOk={this.handleCreate}
        >
            <Form layout="vertical">
                <FormItem label="Title">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input the name of the event!' }],
                    })(
                        <Input placeholder="New event"/>
                    )}
                </FormItem>
                <FormItem label="Employess">
                    {getFieldDecorator('resourceId', {
                        rules: [{ required: true, message: 'Please choose one of available employees!' }],
                    })(
                        <Select placeholder="Name Surname">
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
                        rules: [{ required: false, message: 'Please choose one of available colors!' }],
                    })(
                        <Select placeholder="color">
                            {colors.map((color) =>
                                <Option key={color.value}>{color.label}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
            </Form>
        </Modal>
        </div>                        
        )
    }

}

export default Form.create()(AddEventForm);