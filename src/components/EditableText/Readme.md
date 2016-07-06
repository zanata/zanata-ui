## Editable
    
    function handleOnChange (e) {
        setState({value: e.target.value})
    }
    <EditableText 
        editable 
        editing
        placeholder='Placeholder text'
        emptyReadOnlyText='Text to display when empty value'
        onChange={handleOnChange}>
        {state.value}
    </EditableText>

## Non editable
    
    <EditableText editable={false}>Text input</EditableText>