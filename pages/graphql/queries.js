import { gql } from '@apollo/client'; 


const GET_PRODUCTOS = gql`
    query Products {
        products {
        id_product
        internal_code
        serial_number
        imei
        observation
        picture
        model
        product_typeId
        size
        tecnology
        conectivity
        stateId
        historial
        product_type {
        description
        }
        state {
        description
        }
        partcomputer {
        location {
          city
          job_name
            }
        }
        }
    }
    `;

const GET_COMPUTER = gql`
query Computer {
  computers {
    id_computer
    buy_date
    price
    internal_code
    serial_number
    memory
    hard_disk
    processor
    optical_unit
    model
    stateId
    ip
    softwarecomputerId
    locationId
    observation
    historial
    user_domain
    pass_domain
    user_admin
    pass_admin
    user_local
    pass_local
    user_anydesk
    pass_anydesk
    state {
      description
    }
    softwarecomputer {
      operatingsystem
      license_soA
      architecture
    }
    location {
      internal_code
      city
      job_name
    }
    program {
      name_program
      version_program
      license_program
    }
  }
}
  `;



  const GET_PRODUCTO = gql`
  query Query {
    products {
      internal_code
      serial_number
      imei
      observation
      picture
      model
      product_typeId
      size
      tecnology
      conectivity
      stateId
      locationId
      historial
      product_type {
        description
      }
      state {
        description
      }
      location {
        city
        job_name
      }
      maintenance {
        date_maintenance
      }
    }
  }
  `;


export { GET_PRODUCTO, GET_COMPUTER };
