import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import Row from '../Row'

const classes = {
  base: {
    bd: 'Bdb(bd1) Bdc(light)',
    h: 'H(r2)'
  },
  highlight: {
    trs: 'Trs(aeo)',
    hover: {
      bgc: 'Bgc(light):h'
    }
  },
  selected: {
    bgc: 'Bgc(light)',
    custom: 'row--selected'
  }
}
/**
 * Styled table row component (based on Row) which used with TableCell.
 */
const TableRow = ({
  children,
  className,
  selected,
  highlight = false,
  theme = {},
  ...props
}) => {
  const themed = merge({},
    classes,
    theme
  )
  const themedState = {
    base: merge({},
      themed.base,
      highlight && classes.highlight,
      selected && classes.selected,
      className && { classes: className }
    )
  }
  return (
    <Row
      {...props}
      theme={themedState}>
      {children}
    </Row>
  )
}

TableRow.propTypes = {
  children: PropTypes.node,
  /**
   * Toggle whether this row is highlighted or
   * not (CSS styling change). Default is 'false'
   */
  highlight: PropTypes.bool,
  /**
   * Toggle whether this row is selected or
   * not (CSS styling change). Default is 'false'
   */
  selected: PropTypes.bool,
  /**
   * This should not be used.
   * Prefer theme or [atomic classes](http://acss.io/reference)
   * object over classes.
   */
  className: PropTypes.string,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default TableRow
