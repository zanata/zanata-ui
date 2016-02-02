Button:

Button components:

- Button (Basic, No styling except disabled attr)
  - disabled - bool
  - children
  - pass through props
- ButtonRound (Has background color and is rounded)
  - type - oneOf: string (default: default)
  - size - oneOf: string (default: 0)
  - disabled - bool
  - children
  - pass through props
- ButtonLink (Looks like a link)
  - type - oneOf: string (default: default)
  - disabled - bool
  - children

- Loader (Child element, can be added to any button)
  - block - bool (default: false)
  - loading - bool (default: false)

Types:

- default: 'cpri'
- muted: 'csec30'
- primary: 'cpri'
- success: 'csuccess'
- unsure: 'cunsure'
- warning: 'cwarning'
- danger: 'cdanger'
