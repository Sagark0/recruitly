export interface Company {
  additionalParams: {
    additionalProp1: "string";
    additionalProp2: "string";
    additionalProp3: "string";
  };
  analytics: {
    avgCVSentToInterviewDays: 0;
    avgClientRejectRate: 0;
    avgInterviewToOfferDays: 0;
    avgInterviewToOfferPct: 0;
    avgInterviewToOfferRatio: "string";
    avgJobCreatedToApplicationDays: 0;
    avgJobCreatedToShortlistDays: 0;
    avgJobCreatedToSourcedDays: 0;
    avgOfferToPlacementDays: 0;
    avgOfferToPlacementPct: 0;
    avgOfferToPlacementRatio: "string";
    avgPlacementValue: 0;
    avgTimeToFillAllTime: 0;
    avgTimeToFillCurrYear: 0;
    avgTimeToFillPrevYear: 0;
    billingCurrMonth: 0;
    billingCurrQrtr: 0;
    billingCurrYear: 0;
    billingPrevMonth: 0;
    billingPrevQrtr: 0;
    billingPrevYear: 0;
    closedJobsPipelineValue: 0;
    jobsCurrMonth: 0;
    jobsCurrQrtr: 0;
    jobsCurrYear: 0;
    jobsPrevMonth: 0;
    jobsPrevQrtr: 0;
    jobsPrevYear: 0;
    lostOpportunityValue: 0;
    openJobsCount: 0;
    openJobsPipelineValue: 0;
    openOpportunities: 0;
    opportunitiesCurrMonth: 0;
    opportunitiesCurrQrtr: 0;
    opportunitiesCurrYear: 0;
    opportunitiesPrevMonth: 0;
    opportunitiesPrevQrtr: 0;
    opportunitiesPrevYear: 0;
    opportunityDealValue: 0;
    opportunityValueCurrMonth: 0;
    opportunityValueCurrQrtr: 0;
    opportunityValueCurrYear: 0;
    opportunityValuePrevMonth: 0;
    opportunityValuePrevQrtr: 0;
    opportunityValuePrevYear: 0;
    pendingPositionsToFill: 0;
    placementsCurrMonth: 0;
    placementsCurrQrtr: 0;
    placementsCurrYear: 0;
    placementsPrevMonth: 0;
    placementsPrevQrtr: 0;
    placementsPrevYear: 0;
    totalBillingValue: 0;
    totalContacts: 0;
    totalJobs: 0;
    totalOpportunities: 0;
    totalPlacements: 0;
    totalPositionsToFill: 0;
  };
  apolloRecord: {
    accountId: "string";
    createdOn: "2024-09-09T07:02:04.640Z";
    emailStatus: "string";
    enableSync: true;
    enrichedByEmail: "string";
    enrichedById: "string";
    enrichedOn: "2024-09-09T07:02:04.640Z";
    lastSyncOn: "2024-09-09T07:02:04.640Z";
    organizationId: "string";
    peopleId: "string";
    personId: "string";
    recordId: "string";
    recordType: "string";
    syncEnabledByEmail: "string";
    syncEnabledById: "string";
    syncEnabledOn: "2024-09-09T07:02:04.640Z";
  };
  benefitsPackage: "string";
  client: true;
  companySizeCode: "string";
  companyTypeId: "string";
  createdBySystem: true;
  createdOn: "2024-09-09T07:02:04.640Z";
  description: "string";
  distributionListId: "string";
  domain: "string";
  email: "string";
  employees: "string";
  facebook: "string";
  faxNo: "string";
  headOffice: {
    address: {
      addressLabel: "string";
      addressLine: "string";
      addressLine2: "string";
      cityName: "string";
      cityOrRegionAndPostCode: "string";
      cityRegion: "string";
      country: "string";
      countryCode: "string";
      countryName: "string";
      hasCity: true;
      hasCityOrRegion: true;
      hasCountry: true;
      hasPostcode: true;
      hasRegion: true;
      hasValidGeo: true;
      latitude: 0;
      longitude: 0;
      postCode: "string";
      regionName: "string";
    };
    id: "string";
    name: "string";
  };
  id: "string";
  imageUrl: "string";
  industries: [
    {
      category: "string";
      createdBy: "string";
      id: "string";
      name: "string";
      position: 0;
      tenantId: "string";
      type: {
        code: "string";
        id: "string";
        name: "string";
      };
    }
  ];
  labels: [
    {
      bgColor: "string";
      filterId: "string";
      id: "string";
      name: "string";
      parentLabelId: "string";
      parentLabelName: "string";
      position: 0;
      shared: true;
      textColor: "string";
      type: "ACTIVE_FILTER";
    }
  ];
  languages: ["string"];
  linkedIn: "string";
  logoUrl: "string";
  modifiedOn: "2024-09-09T07:02:04.640Z";
  name: "string";
  openJobs: true;
  otherOffices: [
    {
      address: {
        addressLabel: "string";
        addressLine: "string";
        addressLine2: "string";
        cityName: "string";
        cityOrRegionAndPostCode: "string";
        cityRegion: "string";
        country: "string";
        countryCode: "string";
        countryName: "string";
        hasCity: true;
        hasCityOrRegion: true;
        hasCountry: true;
        hasPostcode: true;
        hasRegion: true;
        hasValidGeo: true;
        latitude: 0;
        longitude: 0;
        postCode: "string";
        regionName: "string";
      };
      id: "string";
      name: "string";
    }
  ];
  ownerId: "string";
  ownerName: "string";
  parent: {
    address: {
      addressLabel: "string";
      addressLine: "string";
      addressLine2: "string";
      cityName: "string";
      cityNameLower: "string";
      cityOrRegionAndPostCode: "string";
      cityRegion: "string";
      country: "string";
      countryCode: "string";
      countryCodeLower: "string";
      countryName: "string";
      fullAddressLine: "string";
      geoCodingLine: "string";
      hasAddressLine: true;
      hasCity: true;
      hasCityOrRegion: true;
      hasCountry: true;
      hasCountryCode: true;
      hasPostcode: true;
      hasRegion: true;
      hasValidGeo: true;
      latitude: 0;
      longitude: 0;
      postCode: "string";
      regionName: "string";
      shortAddressLine: "string";
    };
    alternateEmail: "string";
    cvId: "string";
    doNotContact: true;
    email: "string";
    employerName: "string";
    hasCv: true;
    headline: "string";
    homePhone: "string";
    id: "string";
    initials: "string";
    label: "string";
    labels: [
      {
        bgColor: "string";
        filterId: "string";
        id: "string";
        name: "string";
        parentLabelId: "string";
        parentLabelName: "string";
        position: 0;
        shared: true;
        textColor: "string";
        type: "ACTIVE_FILTER";
      }
    ];
    mobile: "string";
    ownerId: "string";
    ownerName: "string";
    rating: 0;
    recordType: "string";
    reference: "string";
    tenantId: "string";
    tenantName: "string";
    website: "string";
    workPhone: "string";
  };
  phone: "string";
  placements: true;
  rating: 0;
  reference: "string";
  sectors: [
    {
      category: "string";
      createdBy: "string";
      id: "string";
      name: "string";
      position: 0;
      tenantId: "string";
      type: {
        code: "string";
        id: "string";
        name: "string";
      };
    }
  ];
  skills: ["string"];
  status: {
    category: "string";
    createdBy: "string";
    id: "string";
    name: "string";
    position: 0;
    tenantId: "string";
    type: {
      code: "string";
      id: "string";
      name: "string";
    };
  };
  statusId: "string";
  tags: [
    {
      key: "string";
      value: "string";
    }
  ];
  termsAgreed: "string";
  twitter: "string";
  type: "ACTIVE_FILTER";
  udfList: [
    {
      key: {
        id: "string";
        inputType: "DROPDOWN OR MULTI_SELECT or INPUT_DATE..";
      };
      value: {
        dateValue: "string";
        listValue: ["string"];
        textValue: "string";
      };
    }
  ];
  website: "string";
}

export interface ApiResponse {
  data: Company[];
  message: "string";
  success: true;
  totalCount: 0;
  totalValue: 0;
}

export interface CompanyDetails {
  additionalParams: {
    additionalProp1: "string";
    additionalProp2: "string";
    additionalProp3: "string";
  };
  analytics: {
    avgCVSentToInterviewDays: 0;
    avgClientRejectRate: 0;
    avgInterviewToOfferDays: 0;
    avgInterviewToOfferPct: 0;
    avgInterviewToOfferRatio: "string";
    avgJobCreatedToApplicationDays: 0;
    avgJobCreatedToShortlistDays: 0;
    avgJobCreatedToSourcedDays: 0;
    avgOfferToPlacementDays: 0;
    avgOfferToPlacementPct: 0;
    avgOfferToPlacementRatio: "string";
    avgPlacementValue: 0;
    avgTimeToFillAllTime: 0;
    avgTimeToFillCurrYear: 0;
    avgTimeToFillPrevYear: 0;
    billingCurrMonth: 0;
    billingCurrQrtr: 0;
    billingCurrYear: 0;
    billingPrevMonth: 0;
    billingPrevQrtr: 0;
    billingPrevYear: 0;
    closedJobsPipelineValue: 0;
    jobsCurrMonth: 0;
    jobsCurrQrtr: 0;
    jobsCurrYear: 0;
    jobsPrevMonth: 0;
    jobsPrevQrtr: 0;
    jobsPrevYear: 0;
    lostOpportunityValue: 0;
    openJobsCount: 0;
    openJobsPipelineValue: 0;
    openOpportunities: 0;
    opportunitiesCurrMonth: 0;
    opportunitiesCurrQrtr: 0;
    opportunitiesCurrYear: 0;
    opportunitiesPrevMonth: 0;
    opportunitiesPrevQrtr: 0;
    opportunitiesPrevYear: 0;
    opportunityDealValue: 0;
    opportunityValueCurrMonth: 0;
    opportunityValueCurrQrtr: 0;
    opportunityValueCurrYear: 0;
    opportunityValuePrevMonth: 0;
    opportunityValuePrevQrtr: 0;
    opportunityValuePrevYear: 0;
    pendingPositionsToFill: 0;
    placementsCurrMonth: 0;
    placementsCurrQrtr: 0;
    placementsCurrYear: 0;
    placementsPrevMonth: 0;
    placementsPrevQrtr: 0;
    placementsPrevYear: 0;
    totalBillingValue: 0;
    totalContacts: 0;
    totalJobs: 0;
    totalOpportunities: 0;
    totalPlacements: 0;
    totalPositionsToFill: 0;
  };
  apolloRecord: {
    accountId: "string";
    createdOn: "2024-09-09T08:32:54.956Z";
    emailStatus: "string";
    enableSync: true;
    enrichedByEmail: "string";
    enrichedById: "string";
    enrichedOn: "2024-09-09T08:32:54.956Z";
    lastSyncOn: "2024-09-09T08:32:54.956Z";
    organizationId: "string";
    peopleId: "string";
    personId: "string";
    recordId: "string";
    recordType: "string";
    syncEnabledByEmail: "string";
    syncEnabledById: "string";
    syncEnabledOn: "2024-09-09T08:32:54.956Z";
  };
  benefitsPackage: "string";
  client: true;
  companySizeCode: "string";
  companyTypeId: "string";
  createdBySystem: true;
  createdOn: "2024-09-09T08:32:54.956Z";
  description: "string";
  distributionListId: "string";
  domain: "string";
  email: "string";
  employees: "string";
  facebook: "string";
  faxNo: "string";
  headOffice: {
    address: {
      addressLabel: "string";
      addressLine: "string";
      addressLine2: "string";
      cityName: "string";
      cityOrRegionAndPostCode: "string";
      cityRegion: "string";
      country: "string";
      countryCode: "string";
      countryName: "string";
      hasCity: true;
      hasCityOrRegion: true;
      hasCountry: true;
      hasPostcode: true;
      hasRegion: true;
      hasValidGeo: true;
      latitude: 0;
      longitude: 0;
      postCode: "string";
      regionName: "string";
    };
    id: "string";
    name: "string";
  };
  id: "string";
  imageUrl: "string";
  industries: [
    {
      category: "string";
      createdBy: "string";
      id: "string";
      name: "string";
      position: 0;
      tenantId: "string";
      type: {
        code: "string";
        id: "string";
        name: "string";
      };
    }
  ];
  labels: [
    {
      bgColor: "string";
      filterId: "string";
      id: "string";
      name: "string";
      parentLabelId: "string";
      parentLabelName: "string";
      position: 0;
      shared: true;
      textColor: "string";
      type: "ACTIVE_FILTER";
    }
  ];
  languages: ["string"];
  linkedIn: "string";
  logoUrl: "string";
  modifiedOn: "2024-09-09T08:32:54.956Z";
  name: "string";
  openJobs: true;
  otherOffices: [
    {
      address: {
        addressLabel: "string";
        addressLine: "string";
        addressLine2: "string";
        cityName: "string";
        cityOrRegionAndPostCode: "string";
        cityRegion: "string";
        country: "string";
        countryCode: "string";
        countryName: "string";
        hasCity: true;
        hasCityOrRegion: true;
        hasCountry: true;
        hasPostcode: true;
        hasRegion: true;
        hasValidGeo: true;
        latitude: 0;
        longitude: 0;
        postCode: "string";
        regionName: "string";
      };
      id: "string";
      name: "string";
    }
  ];
  ownerId: "string";
  ownerName: "string";
  parent: {
    address: {
      addressLabel: "string";
      addressLine: "string";
      addressLine2: "string";
      cityName: "string";
      cityNameLower: "string";
      cityOrRegionAndPostCode: "string";
      cityRegion: "string";
      country: "string";
      countryCode: "string";
      countryCodeLower: "string";
      countryName: "string";
      fullAddressLine: "string";
      geoCodingLine: "string";
      hasAddressLine: true;
      hasCity: true;
      hasCityOrRegion: true;
      hasCountry: true;
      hasCountryCode: true;
      hasPostcode: true;
      hasRegion: true;
      hasValidGeo: true;
      latitude: 0;
      longitude: 0;
      postCode: "string";
      regionName: "string";
      shortAddressLine: "string";
    };
    alternateEmail: "string";
    cvId: "string";
    doNotContact: true;
    email: "string";
    employerName: "string";
    hasCv: true;
    headline: "string";
    homePhone: "string";
    id: "string";
    initials: "string";
    label: "string";
    labels: [
      {
        bgColor: "string";
        filterId: "string";
        id: "string";
        name: "string";
        parentLabelId: "string";
        parentLabelName: "string";
        position: 0;
        shared: true;
        textColor: "string";
        type: "ACTIVE_FILTER";
      }
    ];
    mobile: "string";
    ownerId: "string";
    ownerName: "string";
    rating: 0;
    recordType: "string";
    reference: "string";
    tenantId: "string";
    tenantName: "string";
    website: "string";
    workPhone: "string";
  };
  phone: "string";
  placements: true;
  rating: 0;
  reference: "string";
  sectors: [
    {
      category: "string";
      createdBy: "string";
      id: "string";
      name: "string";
      position: 0;
      tenantId: "string";
      type: {
        code: "string";
        id: "string";
        name: "string";
      };
    }
  ];
  skills: ["string"];
  status: {
    category: "string";
    createdBy: "string";
    id: "string";
    name: "string";
    position: 0;
    tenantId: "string";
    type: {
      code: "string";
      id: "string";
      name: "string";
    };
  };
  statusId: "string";
  tags: [
    {
      key: "string";
      value: "string";
    }
  ];
  termsAgreed: "string";
  twitter: "string";
  type: "ACTIVE_FILTER";
  udfList: [
    {
      key: {
        id: "string";
        inputType: "DROPDOWN OR MULTI_SELECT or INPUT_DATE..";
      };
      value: {
        dateValue: "string";
        listValue: ["string"];
        textValue: "string";
      };
    }
  ];
  website: "string";
}
