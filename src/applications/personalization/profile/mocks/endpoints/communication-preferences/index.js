const maximalSetOfPreferences = {
  data: {
    id: '',
    type: 'hashes',
    attributes: {
      communicationGroups: [
        {
          id: 4,
          name: 'Payments',
          description: 'Payments to the Veteran',
          communicationItems: [
            {
              id: 5,
              name: 'Disability and pension deposit notifications',
              communicationChannels: [
                {
                  id: 1,
                  name: 'Text',
                  description: 'SMS Notification',
                },
              ],
            },
          ],
        },
        {
          id: 1,
          name: 'Applications, claims, decision reviews, and appeals',
          description: null,
          communicationItems: [
            {
              id: 1,
              name: "Board of Veterans' Appeals hearing reminder",
              communicationChannels: [
                {
                  id: 1,
                  name: 'Text',
                  description: 'SMS Notification',
                },
              ],
            },
            {
              id: 6,
              name: 'Appeal status updates',
              communicationChannels: [
                {
                  id: 1,
                  name: 'Text',
                  description: 'SMS Notification',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: 'Your health care',
          description: null,
          communicationItems: [
            {
              id: 3,
              name: 'Appointment reminders',
              communicationChannels: [
                {
                  id: 1,
                  name: 'Text',
                  description: 'SMS Notification',
                  communicationPermission: {
                    id: 8596,
                    allowed: true,
                  },
                },
              ],
            },
            {
              id: 4,
              name: 'Prescription shipment and tracking updates',
              communicationChannels: [
                {
                  id: 1,
                  name: 'Text',
                  description: 'SMS Notification',
                  communicationPermission: {
                    id: 8361,
                    allowed: false,
                  },
                },
              ],
            },
            // new communication items https://github.com/department-of-veterans-affairs/va.gov-team/issues/53616
            {
              id: 7,
              name: 'RX refill shipment notification',
              communicationChannels: [
                {
                  id: 2,
                  name: 'Email',
                  description: 'Email Notification',
                  communicationPermission: {
                    id: 8362,
                    allowed: true,
                  },
                },
              ],
            },
            {
              id: 8,
              name: 'VA Appointment reminders',
              communicationChannels: [
                {
                  id: 2,
                  name: 'Email',
                  description: 'Email Notification',
                  communicationPermission: {
                    id: 8362,
                    allowed: true,
                  },
                },
              ],
            },
            {
              id: 9,
              name: 'Secure messaging alert',
              communicationChannels: [
                {
                  id: 2,
                  name: 'Email',
                  description: 'Email Notification',
                  communicationPermission: {
                    id: 8362,
                    allowed: true,
                  },
                },
              ],
            },
            {
              id: 10,
              name: 'Medical images and reports available',
              communicationChannels: [
                {
                  id: 2,
                  name: 'Email',
                  description: 'Email Notification',
                  communicationPermission: {
                    id: 8362,
                    allowed: true,
                  },
                },
              ],
            },
            // end new communication items 53616
          ],
        },
        {
          id: 2,
          name: 'General VA Updates and Information',
          description: null,
          communicationItems: [
            {
              id: 11,
              name: 'Biweekly MHV newsletter',
              communicationChannels: [
                {
                  id: 2,
                  name: 'Email',
                  description: 'Email Notification',
                  communicationPermission: {
                    id: 8362,
                    allowed: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

module.exports = {
  maximalSetOfPreferences,
};