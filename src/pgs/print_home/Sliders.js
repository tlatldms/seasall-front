import React, { Component } from 'react';
import OtherLabels from './OtherLabels';
import StatusAndRequire from './StatusAndRequire';
class Sliders extends Component {
    render() {
        return (
            <div class="sliders">
                <OtherLabels />
                <StatusAndRequire />
            </div>
        );
    }
}
export default Sliders;