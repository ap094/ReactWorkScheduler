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
        <button onClick={this.showModal} className="btn btn-primary btn-sm">Dodaj novi događaj</button>
        <Modal
            visible={this.state.visible}
            title="Kreiraj novi događaj"
            okText="Kreiraj"
            cancelText="Odustani"
            onCancel={this.handleCancel}
            onOk={this.handleCreate}
        >
            <Form layout="vertical">
                <FormItem label="Naziv">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Unesite naziv događaja!' }],
                    })(
                        <Input placeholder="Novi događaj"/>
                    )}
                </FormItem>
                <FormItem label="Zaposlenici">
                    {getFieldDecorator('resourceId', {
                        rules: [{ required: true, message: 'Odaberite jednog od zaposlenika!' }],
                    })(
                        <Select placeholder="Ime Prezime">
                            {employees.map((employe) =>
                                <Option key={employe.id}>{employe.name}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem label="Datum" required={true} >
                <div className="input-group">
                    <FormItem>
                        {getFieldDecorator('start', {
                            rules: [{ required: true, message: 'Unesite početni datum!' }],
                        })(
                            <DateTimePicker
                                format='DD-MM-YYYY HH:mm'
                                placeholder="Početni datum"
                                className="datePick"
                            />
                        )}
                    </FormItem>
                    <span className="input-group-addon"></span>
                    <FormItem>
                        {getFieldDecorator('end', {
                            rules: [{ required: true, message: 'Unesite završni datum!' }],
                        })(
                            <DateTimePicker 
                                format='DD-MM-YYYY HH:mm'
                                placeholder="Završni datum"
                                className="datePick"
                            />
                        )}
                    </FormItem>
                </div>
                </FormItem>
                <FormItem label="Boja događaja">
                    {getFieldDecorator('bgColor', {
                        rules: [{ required: false, message: 'Odaberite jednu od ponuđenih boja!' }],
                    })(
                        <Select placeholder="boja">
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