import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class ResourceView extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
        contentScrollbarHeight: PropTypes.number.isRequired,
        slotClickedFunc: PropTypes.func,
        slotItemTemplateResolver: PropTypes.func
    }

    render() {

        const {schedulerData, contentScrollbarHeight, slotClickedFunc, slotItemTemplateResolver, employees} = this.props;
        const {renderData} = schedulerData;

        let width = schedulerData.getResourceTableWidth() - 2;
        let paddingBottom = contentScrollbarHeight;
        let resourceList = renderData.map((item) => {
            let a = slotClickedFunc != undefined ? <a onClick={() => {
                slotClickedFunc(schedulerData, item);
            }}><span className="expander-space"></span>{item.slotName}</a>
                : <span><span className="expander-space"></span><span>{item.slotName}</span></span>;

            let wh = <p></p>;
            employees.map((employee) => {

                if(employee.id === item.slotId)
                {
                    wh = employee.weeklyWorkingHours
                }
                return false
            })
            let slotItem = (
                <div title={item.slotName} className="overflow-text header2-text" style={{textAlign: "left"}}>
                    {a}
                    <span className="resoViewWH">- {wh} sat/tj</span>
                </div>
            );
            if(!!slotItemTemplateResolver) {
                let temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, "overflow-text header2-text");
                if(!!temp)
                    slotItem = temp;
            }

            return (
                <tr key={item.slotId}>
                    <td data-resource-id={item.slotId} style={{height: item.rowHeight}}>
                        {slotItem}
                    </td>
                </tr>
            );
        });

        return (
            <div style={{paddingBottom: paddingBottom}}>
                <table className="resource-table">
                    <tbody>
                        {resourceList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResourceView