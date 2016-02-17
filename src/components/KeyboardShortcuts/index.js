import React, { Component } from 'react'
import Combokeys from 'combokeys'
import CombokeysGlobal from 'combokeys/plugins/global-bind'
import CombokeysBindDictionary from 'combokeys/plugins/bind-dictionary'

const combokeys =
  CombokeysBindDictionary(CombokeysGlobal(new Combokeys(document)))

export default function KeyboardShortcuts (Base) {
  return class extends Component {
    // Array for keeping track of shortcuts bindings
    constructor (props) {
      super(props)
      this.keyboardBindings = []
    }
    /**
     * Bind a function to a keyboard shortcut
     *
     * @param key
     * @param callback
     */
    bindShortcut = (key, callback) => {
      combokeys.bind(key, callback)
      this.keyboardBindings.push(key)
    };
      /**
     * Bind a function to a keyboard shortcut, even inside an input field
     *
     * @param key
     * @param callback
     */
    bindGlobalShortcut = (key, callback) => {
      combokeys.bindGlobal(key, callback)
      this.keyboardBindings.push(key)
    };
    /**
     * Unbind a keyboard shortcut
     *
     * @param key
     */
    unbindShortcut = (key) => {
      let index = this.keyboardBindings.indexOf(key)
      if (index !== -1) {
        this.keyboardBindings.splice(index, 1)
      }
      combokeys.unbind(key)
    };
    /**
     * Remove any keyboard bindings
     */
    unbindAllShortcuts = () => {
      if (this.keyboardBindings.length < 1) {
        return
      }
      this.keyboardBindings.forEach(function (binding) {
        combokeys.unbind(binding)
      })
    };
    /**
     * Handle component unmount
     */
    componentWillUnmount () {
      // Remove any keyboard bindings before unmounting
      this.unbindAllShortcuts()
    }
    render () {
      return <Base
        {...this.props}
        bindShortcut={::this.bindShortcut}
        bindGlobalShortcut={::this.bindGlobalShortcut}
        unbindShortcut={::this.unbindShortcut}
      />
    }
  }
}
