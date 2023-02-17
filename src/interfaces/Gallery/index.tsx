export interface IGalleryRequest {
    url: string;
    vehicleId: string;
}

export interface IGallery extends IGalleryRequest {
    id: string;
}

export interface IGalleryUpdate {
    url: string;
}