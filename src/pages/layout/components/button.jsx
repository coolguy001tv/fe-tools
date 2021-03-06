import React, {Component, PropTypes} from 'react';
import RUI from 'react-component-lib';
import Base, {editable} from '../component-base.jsx';
import { DropTarget } from 'react-dnd';
import generator from './dnd/generator.jsx';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        editable.all(this, {
            children:'确认'
        });
    }

    getTagName() {
        return "RUI.Button";
    }

    getDefaultClassName() {
        return [
            'primary',
            'green'
        ];
    }

    getDefaultProperties() {
        return [
            {prop:'disable', type:'boolean'},
            {prop:'icon', type:'input'}
        ]
    }

    render() {
        var externalProps = this.state.properties ? this.state.properties : {};
        return <RUI.Button ref="main" className={this.state.className} style={this.state.styles} {...externalProps}>{this.state.children}</RUI.Button>
    }
}

export default Base(Button, 'rui');
