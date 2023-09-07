type LicenseType = {
    id: React.Key
    region?: number
    system?: number
    aai_id: string
    customer_id: string
    serial_number: React.Key
    uuid: React.Key
    license_key: React.Key
    desc?: string
    is_expired: boolean
    is_permanent: boolean
    expiration_date: number
    createdAt: number
    updatedAt: number
}

// Randomly Generated Table Data
const defaultData: LicenseType[] = []
for (let i = 1; i <= 50; i++) {
    defaultData.push({
        id: i,
        region: Math.floor(Math.random() * 10) % 4,
        system: Math.floor(Math.random() * 10) % 3,
        aai_id: `aai_id ${i}`,
        customer_id: `customer_id ${i}`,
        serial_number: `serial_number ${i}`,
        uuid: `uuid ${i}`,
        license_key: `license_key ${i}`,
        desc: ``,
        is_expired: Math.random()>0.5,
        is_permanent: Math.random()>0.5,
        expiration_date: Date.now() - Math.floor(Math.random() * 2000),
        createdAt: Date.now() - Math.floor(Math.random() * 2000),
        updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    });
}

export { LicenseType, defaultData } 
