
Ext.create('Ext.Container', {
    fullscreen: true,
    layout: 'fit',
    items: [
        {
            layout: 'vbox',
            items: [
                {
                    margin: 10,
                    items: [{ xtype: 'datefield', label: 'Cob Date' },
                            { xtype: 'component', label: 'Additional Options:' }
                        ]
                },
                {  //vertical box container
                    items: [
                        {   //vertical box container
                            margin: 10, layout: 'hbox', flex: 4,
                            items: [
                                {   //vertical box container
                                    margin: 10, layout: 'vbox', flex: 2,
                                    items: [
                                        { xtype: 'combobox', label: 'Portfolio' },
                                        { xtype: 'textfield', label: 'Methodology' },
                                        { xtype: 'textfield', label: 'Hierarchy' },
                                        { xtype: 'checkboxfield', label: 'Official' }],
                                    listeners: { toggle: 'onToggle' }
                                },
                                {
                                    xtype: 'component',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'component',
                                            title: 'Tab 1',
                                            html: '| '
                                        }
                                    ]
                                },                                {
                                    margin: 10, layout: 'vbox', flex: 2,
                                    items: [
                                        { xtype: 'textfield', label: 'Percentile:' },
                                        { xtype: 'textfield', label: 'Run Tag' },
                                        { xtype: 'textfield', label: 'VaR Window' },
                                        { xtype: 'checkboxfield', label: 'Approved' }],
                                    listeners: { toggle: 'onToggle' }
                                }]

                        }
                    ]
                }]
        }]
});

//https://docs.sencha.com/extjs/6.5.0/modern/Ext.field.Container.html
