
export enum Scopes {
    r_organization_social = 1, // Retrieve your organization's posts, comments, reactions, and other engagement data
    r_1st_connections_size, // Use your 1st-degree connections' data
    r_emailaddress, // Use the primary email address associated with your LinkedIn account
    r_ads_reporting, // Retrieve reporting for your advertising accounts
    rw_organization_admin, // Manage your organizations' pages and retrieve reporting data
    r_liteprofile, // Use your name and photo
    r_basicprofile, // Use your basic profile including your name, photo, headline, and public profile URL
    rw_ads, // Manage your advertising accounts
    r_ads, // Retrieve your advertising accounts
    w_member_social, // Create, modify, and delete posts, comments, and reactions on your behalf
    w_organization_social, // Create, modify, and delete posts, comments, and reactions on your organization's behalf
}
