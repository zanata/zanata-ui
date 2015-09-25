'use strict';

var React = require('react');
var cx = require('classnames');

var SingleValue = React.createClass({
	displayName: 'SingleValue',

	propTypes: {
		placeholder: React.PropTypes.string, // this is default value provided by React-Select based component
		value: React.PropTypes.object // selected option
	},
	render: function render() {
		var selectPlaceholderClasses = cx('pr2 fz2 posa ovh l0 t0 r0', {
			'csec50': !this.props.value,
			'csec': this.props.value
		});
		return React.createElement(
			'div',
			{ className: selectPlaceholderClasses },
			this.props.placeholder
		);
	}
});

module.exports = SingleValue;