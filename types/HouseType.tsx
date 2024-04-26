interface HouseType {
    privateRemarks: string;
    showingContactName: string | null;
    property: {
        roof: string;
        cooling: string | null;
        style: string;
        area: number;
        bathsFull: number;
        bathsHalf: number;
        stories: number;
        fireplaces: number;
        flooring: string | null;
        heating: string;
        bathrooms: string | null;
        foundation: string;
        laundryFeatures: string;
        occupantName: string | null;
        ownerName: string | null;
        lotDescription: string;
        pool: string;
        subType: string | null;
        bedrooms: number;
        interiorFeatures: string;
        lotSize: string;
        areaSource: string;
        maintenanceExpense: number | null;
        additionalRooms: string;
        exteriorFeatures: string;
        water: string | null;
        view: string;
        lotSizeArea: number | null;
        subdivision: string;
        construction: string;
        parking: {
            leased: string | null;
            spaces: number;
            description: string;
        };
        lotSizeAreaUnits: string | null;
        type: string;
        garageSpaces: number;
        bathsThreeQuarter: string | null;
        accessibility: string;
        acres: number | null;
        occupantType: string | null;
        subTypeText: string | null;
        yearBuilt: number;
    };
    mlsId: number;
    showingContactPhone: string | null;
    terms: string;
    showingInstructions: string;
    office: {
        contact: {
            email: string;
            office: string;
            cell: string | null;
        };
        name: string | null;
        servingName: string | null;
        brokerid: string | null;
    };
    leaseTerm: string | null;
    disclaimer: string;
    specialListingConditions: string | null;
    originalListPrice: number | null;
    address: {
        crossStreet: string;
        state: string;
        country: string;
        postalCode: string;
        streetName: string;
        streetNumberText: string;
        city: string;
        streetNumber: number;
        full: string;
        unit: string;
    };
    agreement: string;
    listDate: string;
    agent: {
        officeMlsId: string | null;
        lastName: string;
        contact: {
            email: string;
            office: string;
            cell: string | null;
        };
        address: string | null;
        modified: string | null;
        firstName: string;
        id: string;
    };
    modified: string;
    school: {
        middleSchool: string;
        highSchool: string;
        elementarySchool: string;
        district: string | null;
    };
    photos: string[];
    listPrice: number;
    internetAddressDisplay: string | null;
    listingId: string;
    mls: {
        status: string;
        area: string;
        daysOnMarket: number;
        originalEntryTimestamp: string | null;
        originatingSystemName: string | null;
        statusText: string;
        areaMinor: string | null;
    };
    internetEntireListingDisplay: string | null;
    geo: {
        county: string;
        lat: number;
        lng: number;
        marketArea: string;
        directions: string;
    };
    tax: {
        taxYear: number;
        taxAnnualAmount: number;
        id: string;
    };
    coAgent: {
        officeMlsId: string | null;
        lastName: string | null;
        contact: {
            email: string;
            office: string;
            cell: string | null;
        };
        address: string | null;
        modified: string | null;
        firstName: string | null;
        id: string;
    };
    sales: {
        closeDate: string;
        office: {
            contact: string | null;
            name: string;
            servingName: string;
            brokerid: string;
        };
        closePrice: number;
        agent: {
            officeMlsId: string;
            lastName: string;
            contact: string | null;
            address: string | null;
            modified: string | null;
            firstName: string;
            id: string;
        };
        contractDate: string | null;
    };
    ownership: string | null;
    leaseType: string;
    virtualTourUrl: string | null;
    remarks: string;
    association: {
        frequency: string | null;
        fee: number;
        name: string;
        amenities: string;
    };
}
