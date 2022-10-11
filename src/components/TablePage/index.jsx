import Button from '../Button'
import React from 'react'
import BasicSelect from '../BasicSelect'
import ProductSidebar from '../ProductSideBar/inde'
import './index.scss'

const TablePage = ({ addToCart, badgeCount, cart }) => {

  const [table, setItem] = React.useState({})

  const onSubmit =(event) => {
    event.preventDefault()
    addToCart({table})
  }

  return (
    <>
      <ProductSidebar badgeCount={badgeCount} cart={cart}/>
      <div className='wrapper'>
        <div className='pageContainer product'>
            <div className='productZone'>
                <img src='/images/table.jpg' alt="balloons" />
                <div className='productInfo'>

                  <form onSubmit={onSubmit}>

                    <h3>Tables</h3>

                    <div className='inputControl'>
                      <h4>Size</h4>
                      <BasicSelect 
                        name='Type'
                        value={table['Size']}
                        values={['4ft', '6ft']} 
                        def={false}
                        onChange = {(e) => setItem({ ...table,  'Size': e.target.value })}
                      />
                    </div>

                    <div className='inputControl'>
                      <h4>Type</h4>
                      <BasicSelect 
                        name='Shape'
                        value={table['Shape']}
                        values={['Rectangle', 'Round']} 
                        def={false}
                        onChange = {(e) => setItem({ ...table,  'Shape': e.target.value })}
                      />
                    </div>

                    <div className='inputControl'>
                        <h4>Table Cloths</h4>
                        <BasicSelect 
                          name='Table Cloths'
                          value={table['Table Cloths']}
                          values={['no', 'yes']}
                          def={false}
                          onChange={(e) => setItem({ ...table, 'Table Cloths': e.target.value})}
                        />
                    </div>
                    <div className='inputControl'>
                      <h4>Umbrella Table</h4>
                      <BasicSelect 
                        name='Umbrella Table'
                        value={table['Umbrella Table']}
                        values={['no', 'yes']}
                        def={false}
                        onChange={(e) => setItem({ ...table, 'Umbrella Table': e.target.value})}
                      />
                    </div>
                    <div className='inputControl'>
                      <h4>Kids Table</h4>
                      <BasicSelect
                        name='Kids Table'
                        value={table['Card Table']}
                        values={['no', 'yes']}
                        def={false}
                        onChange={(e) => setItem({ ...table, 'Kids Table': e.target.value})}
                      />
                    </div>
                    <div className='inputControl'>
                      <h4>Quantity</h4>
                      <BasicSelect 
                      name='Quantity'
                      value={table['Quantity']}
                      values={[1,2,3,4,5]}
                      def={false}
                      onChange={(e) => setItem({ ...table, 'Quantity': e.target.value})}
                      />
                    </div>
                    <div className='btnControl'>
                      <Button text='Add to cart' backgroundColor={'#701a65'} color='white'/>
                    </div>
                  </form>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default TablePage