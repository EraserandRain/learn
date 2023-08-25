type LicenseTableListItem = {
    key: number
    id: React.Key
    region: string
    system: string
    aai_id: string
    micron_id: string
    serial_number: React.Key
    uuid: React.Key
    license_key: React.Key
    description?: string
    is_expired: boolean
    expiration_date: number
    createdAt: number
    updatedAt: number
}

const examples = {
    regionEnum: {
        0: "Japan",
        1: "Europe",
        2: "North America",
        3: "Asia Pacific"
    },
    systemEnum: {
        0: "CRM",
        1: "ERP",
        2: "Email"
    }
}
// Randomly Generated Table Data
const testDataSource: LicenseTableListItem[] = []
for (let i = 1; i <= 30; i++) {
    testDataSource.push({
        key: i,
        id: i,
        region: examples.regionEnum[Math.floor(Math.random() * 10) % 4],
        system: examples.systemEnum[Math.floor(Math.random() * 10) % 3],
        aai_id: `aai_id ${i}`,
        micron_id: `micron_id ${i}`,
        serial_number: `serial_number ${i}`,
        uuid: `uuid ${i}`,
        license_key: `license_key ${i}`,
        description: ``,
        expiration_date: Date.now() - Math.floor(Math.random() * 2000),
        is_expired: true,
        createdAt: Date.now() - Math.floor(Math.random() * 2000),
        updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    });
}

export { LicenseTableListItem, testDataSource } 